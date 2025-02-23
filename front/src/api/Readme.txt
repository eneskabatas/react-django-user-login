api.js dosyası=
bu dosya içerisinde rest apiyle iletişimde kullanıcı giriş-çıkış-kayıt olma fonksiyonlarının hepsi barınır
////

context/GlobalState.jsx dosyası
bu dosya içerisinde api.js içerisindeki bağlantılara istek atılarak veriler çekilir ve formlara iletilir
///

api.js içerisindeki call_refresh methodu =
kullanıcı çıkış yapmadığı sürece token süresi dolduysa yenileme tokeniyle tekrar giriş yapmasının önüne geçilir
///

call_refresh methodu kullanım örneği = 
login olmuş kullanıcıya ait bilgileri getirirken aşağıdaki gibi kullanılabilir

export const ornek = async () => {
    try{
        const response = await axios.get(ORNEK_URL,
            {withCredentials: true}
        )
        return respons.data
    }catch(error) {
        return call_refresh(error, axios.get(ORNEK_URL, {withCredentials: true} ))
    }
}