const _language = 'pt-BR'
const _coin = 'BRL'

const Format = (value: number): string => {
  return (value ?? 0).toLocaleString(_language, {
    style: "currency", currency:_coin
  }
}


export default Format