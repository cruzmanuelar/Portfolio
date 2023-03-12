import { AiFillCaretUp } from "react-icons/ai";


const ButtonUp = ({botonarriba, topPage}) => {

    return (
        botonarriba === true &&
        <button 
            className='fixed border-2 transition ease-in-out hover:-translate-y-3 duration-100 bg-[#131212] rounded-md bottom-7 right-7 sm:bottom-12 sm:right-12 animate-bounce'
            style={{
                fontSize: "50px"
            }}
            onClick={topPage}
        >
          <AiFillCaretUp />
        </button>
    )

}

export default ButtonUp