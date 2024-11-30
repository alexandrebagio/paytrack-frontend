import http from "@/services/http";
import axios from "axios";
import Router from "next/router";

export default function LogoutButton() {

  const handleLogout = async () => {
    try {
      await http.post('/logout');
      await axios.post('/api/logout');
      Router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button onClick={handleLogout} className={`p-2 bg-red-400 text-white`}> Sair </button>
  );
}