import http from "@/services/http";

export default function Home() {

  async function getUser() {
    try {
      const response = await http.get('/user');
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response.data.message);
    }

  }

  getUser();
  

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
