module.exports = {
  name: 'pers-ac-contacts',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pers-ac/contacts',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
