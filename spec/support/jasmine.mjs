import path from "path";

export default {
  spec_dir: "test/jasmine",
  spec_files: [
    "**/*[sS]pec.?(m)js"
  ],
  helpers: [
    path.resolve("spec/support/helpers/reporter.mjs")
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
