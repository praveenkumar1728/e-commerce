import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Search = () => {
    const [keyword,setKeyword] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        
        navigate(`/shop/search?keyword=${keyword}`)
        
    }
    
  return (
    <>
            <input 
            type="text" 
            placeholder="Search for products, categories or brands" 
            required
            onChange={(e)=>setKeyword(e.target.value)}
            // value={setKeyword}
            onBlur={handleSubmit}
            />
            <button
            
            className="rts-btn btn-primary radious-sm with-icon"
            onClick={handleSubmit}
            >
                <div className="btn-text">Search</div>
                <div className="arrow-icon"><i className="fa fa-magnifying-glass"></i></div>
            </button>
    </>
  )
}

export default Search