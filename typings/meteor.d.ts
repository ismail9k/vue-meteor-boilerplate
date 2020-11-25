declare module 'meteor/meteor' {
  interface Meteor {
    loginWithKnawat(token: string, callback: Function): any;
  }
}
