import { useBatchUserCreationMutation } from "./apollo/generated/api"

const BatchButton: React.FC<{}> = () => {
  const [batchCreate, loading] = useBatchUserCreationMutation()

  const handleClick = async () => {
    const { data } = await batchCreate()

    try {
      const result = data?.createBatchUser
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  return (<button onClick={handleClick}>Click me to create users in batch</button>)
}

export default BatchButton
