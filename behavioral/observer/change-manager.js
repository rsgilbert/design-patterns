// A change manager manages subject-observer relationships.
// It is responsible for updating observers due to changes on the subjects.
// The subject or instead a user calls methods on the change manager such as Notify, Register, Unregister
// passing in the subject, or observer or both as parameters.
// A user can choose to defer notifications to the observers until a moment when
// they finished making all modifications to the subject and only then do they call Notify() on the change manager.
// With a change manager, subjects do not need to maintain references to their observers. The change manager does so.
// The change manager also defines the update strategy and updates all dependent observers at the request of the subject or user.
// A change manager is an example of the mediator design pattern.