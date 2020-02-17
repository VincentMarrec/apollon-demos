export default async function (helpers) {
    // The helpers provide a methods to simply create a subscription with its name
    helpers.subscriptions.create("random_subscription");

    this.Mutation.random = _ => Math.random();
}
