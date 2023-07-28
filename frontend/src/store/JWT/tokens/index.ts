import { GetJWTToken } from '../../../services/token';

export const CreateDefaultToken = async () => {
    const JWTData = await GetJWTToken("secret@gmail.com", "Secret123@password");
    const token = JWTData.data.token
    return token
}

export const CreateTokenByUser = async (email: string, password: string) => {
    const JWTData = await GetJWTToken(email, password);
    const token = JWTData.data.token
    return token
}
