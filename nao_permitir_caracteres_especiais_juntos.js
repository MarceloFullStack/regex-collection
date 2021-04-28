/* -------------------------------------------------------------------------- */
/*   REGEX PARA VERIFICAR DOIS CARACTERS ESPECIAIS JUNTOS, EXEMPLO .. OU ,,   */
/* -------------------------------------------------------------------------- */

const nao_permitir_caracteres_especiais_juntos = (payload) => {
  return /(?:[^`!@#$%^&*\-_=+'\/.,\[\]\\]*[`!@#$%^&*\-_=+'\/.,\[\]\\]){2}/.test(
    payload
  );
};

var A = "vaca";
var B = "vaca..";
console.log(
  nao_permitir_caracteres_especiais_juntos(A),
  nao_permitir_caracteres_especiais_juntos(B)
);
/* -------------------------------------------------------------------------- */

const nao_permitir_caracteres_especiais_juntos_versao_dois = (payload) => {
  return /(?=(.*[`!@#$%\^&*\-_=\+'/\.,]){2})/.test(payload);
};
var A = "vaca,,";
var B = "vaca..";
console.log(
  nao_permitir_caracteres_especiais_juntos(A),
  nao_permitir_caracteres_especiais_juntos(B)
);

/* -------------------------------------------------------------------------- */
/*                                     FIM                                    */
/* -------------------------------------------------------------------------- */
