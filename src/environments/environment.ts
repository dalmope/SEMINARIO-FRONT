// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Variables for heroku
export const environment = {
  production: false,
  productoURL: 'https://sistemainventario-api.herokuapp.com/productos/',
  authURL: 'https://sistemainventario-api.herokuapp.com/auth/',
  changePasswordURL: 'https://sistemainventario-api.herokuapp.com/email-password/',
  usuariosURL: 'https://sistemainventario-api.herokuapp.com/usuarios/',
  categoriaURL: 'https://sistemainventario-api.herokuapp.com/categorias/',
};

// //Variables for localhost
// export const environment = {
//   production: false,
//   productoURL: 'http://localhost:8080/productos/',
//   authURL: 'http://localhost:8080/auth/',
//   changePasswordURL: 'http://localhost:8080/email-password/',
//   usuariosURL: 'http://localhost:8080/usuarios/',
//   categoriaURL: 'http://localhost:8080/categorias/',
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
