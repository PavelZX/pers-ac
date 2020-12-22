module.exports = {
  name: 'pers-ac-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pers-ac/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
