import { UserCreatedDocument, UserCreatedSubscription, UserCreatedSubscriptionResult, UserCreatedSubscriptionVariables, useUserCreatedSubscription } from "./apollo/generated/api"
import { useState } from 'react'
import CreatedUsersList from "./CreatedUsersList"
import { OnSubscriptionDataOptions, useSubscription } from "@apollo/client"

const CreatedUsers: React.FC<{}> = () => {
  const [users, setUsers] = useState<number[]>([])
  const { data, loading, error } = useUserCreatedSubscription({
    onSubscriptionData: ({ subscriptionData }: OnSubscriptionDataOptions<UserCreatedSubscription>) => {
      console.log(subscriptionData)
      if (subscriptionData?.data?.userCreated?.user) {
        const newUsers = users
        newUsers.push(subscriptionData?.data?.userCreated?.user?.id || -1)
        setUsers(newUsers)
      }
    }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;



  return <CreatedUsersList users={users} />
}

export default CreatedUsers
