import { UserContext } from '../contexts/User'
import { useContext } from 'react'

const ChooseUser = () => {
    const {setUser} = useContext(UserContext)

    const handleDropdownChange = (event) => {
        setUser(event.target.value)
    }

    return (
        <div>
        <label>
          Choose user:
          <select onChange={handleDropdownChange}>
            <option value="happyamy2016">happyamy2016</option>

            <option value="grumpy19">grumpy19</option>
          </select>
        </label>
      </div>
    )
}

export default ChooseUser;