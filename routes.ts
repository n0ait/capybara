/**
* Routes accessibles publiquement
* @type {string[]}
*/
export const publicRoutes = [
  "/"
];

/**
* Routes d'authentification
* Les utilisateurs seront redirigé vers la page d'accueil
* @type {string[]}
*/
export const authRoutes = [
  "/auth/login",
  "/auth/register"
];

/**
* Les routes qui commencent avec ce prefix sont utiliées
* pour l'authentification api
* @type {string}
*/
export const apiAuthPrefix = "/api/auth";


/**
* Route de redirection après une authentification réussie
* @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";

/**
* Route d'authentification
* @type {string}
*/
export const LOGIN_ROUTE = "/auth/login";