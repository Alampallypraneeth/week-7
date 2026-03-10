import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between bg-gray-500 '>

        <img className='w-[5%]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAb1BMVEUAAAD////8/PwEBATr6+ukpKTy8vLHx8f39/fLy8tOTk6VlZUSEhJxcXEyMjJ5eXnk5OS0tLSCgoLS0tLe3t5kZGQMDAxERESNjY2pqanAwMBdXV1sbGxLS0uAgIAtLS1WVlYcHBw8PDybm5slJSUm43oQAAADUElEQVR4nO3caXOqMBSAYcLmVgXEBam92uX//8YbQBFrUNRKML7Ph45lhszheBKSQGtZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDbOfedvnhf3ttEJ7hDK3HvbGNlC+H9STQaOY41Ev5IiNE9TaxlKqS3PwxMj01xIf1kPLm1iZUo3NxAVwR+cSFZStxoaN0weKS7XPgPCK9VnjgWTq9uItqfe3tP6wTHmh2lIisP/991bUxF0c9E7zExtmcuFML3K1qY7LJoJ3ffnTUrv9Vf5ZE2v6yitGxv8eS5cKxYlYx8LFw3bGMsbBNmGJltTS6kqFkLrkynu3zyqth5G9TVhgi/GpwvC+P5B84d+X3Gcr6lGjjksfHlBuSIET8+zPasP+RNxVUWh3ep/D9kJhctxdmeqSoXl3tA2qh8nkT5vSuTIc3eztXGwqxOsvRi1w173+puIvmbM2cnQgyNuI/k0rocVPrKmemoKwZm3FQz0eVcSLVrlUCIbXvBPlq/HCkrg+apbH7pKArAFzNj6qJIxmB7VB/2aT5sES9UFy3PC9qP+WFGorger1IiwUg1cCiuOjBgN+fINJx95h+SsLhq/z27SkVfiX9Pztfy4Hf7ET+Ms/+Zfdj88yJvnX8OFKUhl/VHN9kkO/qjI+q2jdWrt155l53EWX5MKoxajjVXJUMe89PReD5PBvnvA91xtuWrdkpaZuZlcuGcbpv/Fpkz92zgJ7KFehImj/bnusNrXZD6NXXRP7uaNdVknazS3iB2i82vUqg7MK0m0XGfuf7Jm1EmbrU4Xrs0LKv6LNIWTTbPjdav9JNEdzC6jSvJeJlJV63wkAyz1u+3qC5odceiX+Xp21B3LNqtDpVhzuOjW024nVSk5Tz0JfZ2ztuUlWHEGyp38khGRUgyDiYko+TsJ+UmvY1wq3x/1C5mXS+423UqZUtjr3gtrli4UhtS8RzJZn2S18N3vt1FTylsswVsX3cU3eBYy6w2dIfRFV/ZqLHVHUVHLNkJPciTIZr+LYbhPvNkzHSH0RH5nDzVHUVHxHSTPad4+/5Ddxxd4XJv3ZFT8k0oxOu9wqMm0zEMnv+fAfwR1u8AAAAAAAAAAAAAAAAAAAAAAAAAAACA0f4D1t8V6zBtaZsAAAAASUVORK5CYII=" alt="" />
        <div className='flex gap-5 px-10 pt-5 justify-center'>
        <NavLink to="/" className={({isActive})=>isActive?"text-gray-200 ":""}>Home</NavLink>
        <NavLink to="/products" className={({isActive})=>isActive?"text-gray-200":""}>ProductList</NavLink>
        <NavLink to="/contactus" className={({isActive})=>isActive?"text-gray-200":""}>Contactus</NavLink>
        </div>
    </div>
  )
}

export default Header