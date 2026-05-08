## Resumo e considerações sobre a documentação da SDK

Projeto desenvolvido em:

XML -> parte visual

Java -> parte da lógica

Gradle -> contrução e execução do app 

### I - Overview

### II - SDK Integration Guide 
- passo a passo de como integrar SDK no projeto

### III - Description of components

#### 1. Equipment runtime components
- manutenção do robô e de suas configurações:
- utilizado para conexão do robô, self test, sincronização do estado de cada componente... 
- Ex. power, motorStatus, robotProperties...
- consegue puxar essas informações e realizar definições, localizar...

#### 2. Navigation component
- tudo que envolve a navegação, desde a criação da tarefa de navegar, passando pelo que será feito durante (qual rota tomar, o que fazer se for pausado ou parado, status durante o percurso) até completar trajeto
- estratégia de planegamento de rota, de chegada ao ponto, lista de destinos, numero de ciclos...

#### 3. Power assembly
- carregamento manual, automatico, manutenção do nível de bateria

#### 4. Audio component
- audio streaming através do microfone do T8.   

#### 5. Hatch assemblies
- robôs do tipo hotel
- gerenciamento das portas

#### 6. Ros map file manipulation components
- importar e exportar mapas com ROS
- feito com auxilio de um pendrive

#### 6. T3 Hatch control

### IV. Common interface definitions
Descrição de como chamar os métodos e formato da mensagem de retorno.

- queries de informações

### V. Constant field values
- código dos erros e o que significa cada um
- definição dos modos de operação
- constantes de navegação, planejamento de rota, bateria e carregamento e motor