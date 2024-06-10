function AuthRulesform() {
  return (
    <>
      <section className="bg-white :bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 :text-white">
            Update Firestore Rules
          </h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="biography"
                  className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                >
                  Biography
                </label>
                <textarea
                  id="biography"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
                  placeholder="Your description here"
                  value="rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      // Allow anyone to read the documents
      allow read: if true;

      // Allow only authenticated users to write, update, and delete documents
      allow write, update, delete: if request.auth != null;
    }
  }
}
"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-red rounded-lg focus:ring-4 focus:ring-primary-red  hover:bg-primary-hover"
            >
              Update Rules
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default AuthRulesform;
