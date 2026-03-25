/*
CRIAR TIPO DE DADO DE CALCULADORA
INICIAR VALORES DE OPERAÇÃO E DE ALGARISMO
CALCULADORA OPERA E FAZ O RESULTADO APARECER EM ALGARISMO

*/
    
                function format_equation(a) {
        let s = a;

        // =========================
        // 0. NORMALIZAR ESPAÇOS
        // =========================
        s = s.replace(/\s+/g, "").trim();

        // =========================
        // 1. Normalizar símbolos
        // =========================
        s = s
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/,/g, ".");

        // =========================
        // 2. INVALID
        // =========================
        if (s.startsWith("%")) return "invalid";

        // =========================
        // 3. Undefined (divisão por zero)
        // =========================
        if (/\/0(\D|$)/.test(s)) return "undefined";

        // =========================
        // 4. Porcentagem contextual
        // =========================
        s = s.replace(
            /(\d+(?:\.\d+)?)([+\-*/])(\d+(?:\.\d+)?)%/g,
            (_, A, op, B) => {
            if (op === "+") return `${A}+(${A}*${B}/100)`;
            if (op === "-") return `${A}-(${A}*${B}/100)`;
            if (op === "*") return `${A}*(${B}/100)`;
            if (op === "/") return `${A}/(${B}/100)`;
            }
        );

        // =========================
        // 5. Porcentagem isolada
        // =========================
        s = s.replace(/(\d+(?:\.\d+)?)%/g, (_, num) => {
            return `(${num}/100)`;
        });

        // =========================
        // 6. Resolver
        // =========================

        if (s.endsWith("=")) {
            let exp = s.slice(0, -1);

            if (!exp) return "invalid";

            try {
            let r = eval(exp);
            if (!isFinite(r)) return "undefined";
            return r.toString();
            } catch {
            return "invalid";
            }
        }

        if (/[+\-*/]$/.test(s)) {
            let op = s.slice(-1);
            let exp = s.slice(0, -1);

            if (!exp) return "invalid";

            try {
            let r = eval(exp);
            if (!isFinite(r)) return "undefined";
            return r.toString() + op;
            } catch {
            return "invalid";
            }
        }

        return s;
        }

        document.addEventListener("DOMContentLoaded", () =>
        {
            var operation = document.querySelector(".operacao");
            var digit = document.querySelector(".algarismo");
            operation.textContent = "";
            digit.textContent = "";
            digit.attributes.removeNamedItem("style");
            operation.attributes.removeNamedItem("style");
            
            const btns = document.querySelectorAll(".button-calculator");
            
            let iAlreadyClickedEquals = 0;
            let iAlreadyInverteDTheSignal = 0;
            btns.entries().forEach(btnEntry => {
                let btnId = btnEntry.at(1).getAttribute("id")
                    if (btnId == "button-calculator-NUMBER") {
                    let event_number_but = btnEntry.at(1).addEventListener('click', () => {
                        if (iAlreadyClickedEquals == 1) {
                        digit.textContent = ""
                        operation.textContent = ""
                        iAlreadyClickedEquals = 0;
                        }

                        digit.textContent = digit.textContent.concat(btnEntry.at(1).textContent);    
                        
                        
                    })
                }else
                    if(btnId == "button-calculator-NUMBER-CDELETE"){
                      let event_cdel_but = btnEntry.at(1).addEventListener('click', () => {
                        if (digit.textContent == "" && operation.textContent != "") {
                            operation.textContent=""
                        }else{
                        digit.textContent = ""
                    }
                    })  
                    }else
                    if(btnId == "button-calculator-NUMBER-PERCENTAGE"){
                      let event_cdel_but = btnEntry.at(1).addEventListener('click', () => {
                        if (digit.textContent.charAt(0) != "%") {
                            digit.textContent = digit.textContent.concat("%")
                        }
                    })  
                    }else
                    if(btnId == "button-calculator-NUMBER-INVERT"){
                      let event_invert = btnEntry.at(1).addEventListener('click', () => {
                      if (digit.textContent.charAt(0) == '-') {
                        digit.textContent = digit.textContent.replace("-","")
                      }else{
                        digit.textContent = "-".concat(digit.textContent);
                      }
                    })  
                    }else
                    if(btnId == "button-calculator-DELETE"){
                      let event_cdel_but = btnEntry.at(1).addEventListener('click', () => {
                        operation.textContent=""
                        digit.textContent = ""
                    })  
                    }else 
                        if(btnId == "button-calculator-OPERATIONS"){
                    let event_operation_but = btnEntry.at(1).addEventListener('click', () => {
                        if (iAlreadyClickedEquals == 1) {
                            operation.textContent = digit.textContent;
                            operation.textContent = operation.textContent.concat(btnEntry.at(1).textContent);    
                            digit.textContent = "";
                            iAlreadyClickedEquals = 0;
                        }else if(iAlreadyClickedEquals == 0){
                            let formtContent = operation.textContent.concat(digit.textContent, btnEntry.at(1).textContent);
                            console.log(formtContent);
                            let eqFormt = format_equation(formtContent); 
                            if(eqFormt != "invalid" || eqFormt != "undefined"){
                                operation.textContent = eqFormt;
                                digit.textContent = "";
                            }else{
                                digit.textContent = "";
                                operation.textContent = eqFormt;
                            }
                        }
                    })
                }else
                    if(btnId == "button-calculator-OPERATIONS-EQUAL"){
                      let event_equals = btnEntry.at(1).addEventListener('click', () => {
                        
                        operation.textContent = operation.textContent.concat(digit.textContent, btnEntry.at(1).textContent);    
                        let result = format_equation(operation.textContent);
                        operation.textContent = "";
                        iAlreadyClickedEquals = 1;
                        digit.textContent = result;
                    })  
                    }else {
                    let event_unknown_but = btnEntry.at(1).addEventListener('click', () => {
                        console.log("nn sei que botao eh esse");
                    })
                }
            });
        });            
