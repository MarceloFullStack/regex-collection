/* -------------------------------------------------------------------------- */
/*                                 VÁLIDAR CPF                                */
/* -------------------------------------------------------------------------- */

/* --------------------------------- INÍCIO --------------------------------- */
/**
 * 
 * @param {Number | String} cpf 
 * @returns {Bollean}
 */
const validarCpf = cpf => {
    if (!cpf) return true;
    if (typeof cpf == "number") {
        cpf = cpf.toString()
    }
    cpf = cpf.replace(/[^\w\s]/gi, "");
    let soma = 0;
    let resto;
    if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length)
      return false;
  
    for (let i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
  
    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  };

/* ----------------------------------- FIM ---------------------------------- */

  //teste
  var cpfValido = 12345678909
  var cpfInvalido = 12345678910
  console.log(validarCpf(cpfInvalido) ? "CPF válido" : "CPF inválido");