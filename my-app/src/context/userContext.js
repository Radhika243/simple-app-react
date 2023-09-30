import React from "react";

//Creating context
//We can set default value in the context -- codevolution (when doesn't have a matching property in component tree)
const UserContext = React.createContext('codevolution')

//Before exporting, we need to give some readable names for provider and consumer
const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

//2nd video changes
//contexttype property on class (component E)
//-----limitation------
//This only works with class component
//you can only subscribe to single context using context type method
export default UserContext