// The Trigger directive is provided by apollon in the documentation available here : https://github.com/lymeo/apollon
// This directive publishes the result of the previous mutation to the subscription
import GraphQlTools from "graphql-tools";

class TriggerDirective extends GraphQlTools.SchemaDirectiveVisitor {
  static name = "Trigger";

  visitFieldDefinition(field, { objectType }) {
    let subName = this.args.name;

    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(root, params, context) {
      let resolverResult = await resolve.call(this, root, params, context);

      if (subName && subName != "") {
        const { pubsub } = context;

        pubsub.publish(subName, {
          [subName]: resolverResult
        });
      }

      return resolverResult;
    };
  }
}

export default TriggerDirective;