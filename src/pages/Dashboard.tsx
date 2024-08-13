import React, { useEffect, useState } from 'react'
import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from 'react-router';
import { jwtDecode } from "jwt-decode";
import { ChevronDown } from 'lucide-react';
import { deleteMailResponse, getMailList, getMailMasseges } from "../services/api";
import Theme from '../components/Theme';
import DashboardHeader from '../components/DashboardHeader';
const Dashboard = () => {
  const [currColor, setCurrColor] = useState<Boolean>(true);
  const [data , setData ]= useState([]);
  const [singleMail , setSingleMail ]= useState<any>({});
  const [render , setRender]= useState<Boolean>(false)


  const location = useLocation();
  const [ showEmailDesktop,setShowEmailDesktop]= useState(0)

  let token:string =localStorage.getItem("reachinbox-auth") || takeToken();
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const fetchData =()=>{
      getMailList(token).then(res => {
      console.log(res)
         setData(res);
          if (res?.length > 0) {
             setSingleMail(res[0]);
              const id: number = res[0]?.threadId;
              if (id !== undefined)  return getMailMasseges(id);
              else  console.log("error id not found")
              
          } else  console.log("Email not Found")
          
      }).then(messages => setSingleMail(messages))
      .catch(error => console.error('Error:', error));
  }
  
  useEffect(()=>{
    token = location.search.split("?token=")?.join("") ;
    if(token)
    {
      let ParseData = jwtDecode(token);
      localStorage.setItem("reachinbox-auth",JSON.stringify(token));
      localStorage.setItem("reachinbox-auth-firstname",JSON.stringify((ParseData as any).user.firstName));
      localStorage.setItem("reachinbox-auth-lastname",JSON.stringify((ParseData as any).user.lastName));
      localStorage.setItem("reachinbox-auth-email",JSON.stringify((ParseData as any).user.email));
    }
    fetchData()
  },[token,render]);

  function takeToken(): string {
      try {
          const token = localStorage.getItem("reachinbox-auth");
          return token ? JSON.parse(token) : ""; 
      } catch (e) {
          console.log("Error:", e);
          return ""; 
      }
  }

  useEffect(()=>{},[singleMail,showEmailDesktop,isModalOpen])
 
  const handleChangeEmail = (id: number) => {
      getMailMasseges(id).then(messages =>{
          setSingleMail(messages);
      }) 
      .catch(error => console.error('Error:', error));
  }


  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === "d" || event.key === "D")
        {
          openModal();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [isModalOpen]);

  const handleChange=(index:number)=> setShowEmailDesktop(index);

  const deleteEmail =()=>{
      const id:number = singleMail[0].threadId
      deleteMailResponse(id).then((res)=>{
          alert(`The ${id} has been Deleted Successful`);
          setRender(!render)
          closeModal()
      }).catch(err => alert("Error Please try again"))
      
  }


  let firstName = localStorage.getItem('reachinbox-auth-firstname');
  firstName = firstName ? JSON.parse(firstName):''
  let lastName = localStorage.getItem('reachinbox-auth-lastname') 
  lastName = lastName ? JSON.parse(lastName):''
  const username = firstName ? (firstName[0] + (lastName ? lastName[0] : '')) : '';

  return (
    <>
    <div className={`w-full h-full m-auto max-w-[1440px] ${currColor ? "bg-black" : "bg-white"} ${currColor ? "text-white" : "text-black"} h-10 flex`}>
      <div className='w-[56px] h-screen'>
      <Sidebar currColor={currColor} username = {username} showEmailDesktop={showEmailDesktop} handleChange={handleChange}/>
      </div>
      <div  className='w-full max-w-[1383]'>
                <div className={` h-[64px] flex justify-between py-4 pl-8 ${currColor ? "bg-[#1F1F1F]" : "bg-white"} border ${currColor ? "border-gray-700":"border-gray-300" } `}>
                    <p className={`w-full text-left text-xl ${currColor ? "text-white-900" : "text-black-900"} `}>Onebox</p>
                    <div className='w-[210px] h-8 mr-5 flex justify-center items-center gap-5'>
                      <Theme currColor={currColor} onClick={()=> setCurrColor(!currColor)} />
                      <DashboardHeader/>
                    </div>
                </div>
                </div>
    </div>
    </>
  )
}

export default Dashboard