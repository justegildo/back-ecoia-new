// auth.test.js
const { signIn } = require('../controllers/auth.controllers');
const db = require('../config/dbConfig')

jest.mock('../config/dbConfig') // Mock du module de requêtes db

describe('signIn function', () => {
  test('authentifie un utilisateur avec des informations valides', async () => {
    const req = {
      body: {
        username: '66705379',
        password: '12345678',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    db.query.mockResolvedValue({
      rows: [
        {
          name: 'Utilisateur Test',
          email: 'utilisateur@test.com',
          telephone: '66705379',
          delete: false,
          is_active: true,
          password: '$2a$10$wV5bS5d0rCKu6JtIarE4h.K6QPtLwVe4Lc/E2vHYZ1SyJKb3y2FZu', // Mot de passe hashé
        },
      ],
    });

    await signIn(req, res);

    expect(res.send).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  test('renvoie une erreur si le compte n\'existe pas', async () => {
    const req = {
      body: {
        username: 'utilisateur_inexistant',
        password: 'motdepasse',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    db.query.mockResolvedValue({ rows: [] });

    await signIn(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith('Ce compte n\'existe pas !');
  });

  // Ajoutez d'autres tests en fonction de vos cas d'utilisation

  // N'oubliez pas de réinitialiser les mocks après chaque test
  afterEach(() => {
    jest.clearAllMocks();
  });
});
