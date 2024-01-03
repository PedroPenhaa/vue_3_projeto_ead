import axios from "axios";
export default class AuthService {
    static async auth(params) {
        try {
            const response = await axios.post('http://localhost:8080/auth', params);

            return response.data; // Retorna os dados da resposta, se necessário
        } catch (error) {
            console.error("Erro na autenticação:", error);
            throw error; // Rejeita a Promessa com o erro para que possa ser tratado no componente que chama AuthService.auth
        }
    }
}
