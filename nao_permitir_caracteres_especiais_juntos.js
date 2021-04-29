/* -------------------------------------------------------------------------- */
/*                 NÃO PERMITIR COISAS DO TIPO .. OU ,, OU //                 */
/* -------------------------------------------------------------------------- */
/* OBS: CASO VC ESCREVA DUAS LETRAS 
ACENTUADAS ELE VAI CONSIDERAR QUE VC ESTÁ USANDO CARACTERES ESPECIAIS,
PARA EVITAR ESSE PROBLEMA PRIMEIRO REMOVA OS ACENTOS DA STRING */

/* --------------------------------- INICIO --------------------------------- */

var nao_permitir_caracteres_especiais_juntos = payload=>{
  return /^[^\d|^\w]|[^\d|^\w]{2}|[^\d|^\w]$/.test(payload)
}

console.log(nao_permitir_caracteres_especiais_juntos("11aaaa.w.w.44a"));

/* ----------------------------------- FIM ---------------------------------- */