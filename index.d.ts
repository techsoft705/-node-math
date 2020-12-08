/**
 * @description MathFundamental adalah utility untuk melakukan perhitungan matematika dasar
 */
declare namespace nodeMath {
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk meng hitungan pertambahan
   * @return number
   */
  function addition(x: number, y: number): number {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitungan pembagian
   * @return number
   */
  function division(x: number, y: number): number {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitung pangkat
   * @return number
   */
  function exponentiation(x: number, y: number): number {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitung sisabagi
   * @return number
   */
  function modulus(x: number, y: number): number {}
  /**
   * @params { x: number, y: number }
   * @params y: number
   * @description untuk menghitung perkalian
   * @return number
   */
  function multiplication(x: number, y: number): number {}
  /**
   * @params { x: number, y: number }
   * @description untuk menghitung perkalian
   * @return number
   */
  function subtraction(x: number, y: number): number {}
  /**
   * @params { x: number, y: number }
   * @description untuk komparasi angka lebih nesar
   * @return boolean
   */
  function greaterThan(x: number, y: number): number {}
  /**
   * @params { x: number, y: number }
   * @description untuk komparasi angka lebih kecil
   * @return boolean
   */
  function lessThan(x: number, y: number): number {}
}
// export module type defination
export = nodeMath
