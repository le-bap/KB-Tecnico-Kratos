<h1>Manutenções e Tutoriais</h1>

Este documento tem como objetivo auxiliar na manutenção dos robôs e trazer o passo a passo de alguns procedimentos.


**Sumário**

[TOC]


# Linha DinerBot (T8, T9, T10, T11)

## Como trocar a UI Board

# Linha CleanBot (C40 e C30)

## Como trocar a IPC

## Como trocar a valvula solenoide e instalar filtro

1.  Drene a água do tanque retirando a peça verde na parte inferior traseira do robô

2.  Deite-o de modo em que possa acessar a parte de baixo

3.  Remova a tampa de água fixa por 2 parafusos M4:

<img src="/ManutencaoTutoriais/robo-deitado.png" width="300">

4.  Instale um filtro de água no canal mostrado na figura. Cortando o cano, adicione o filtro e isole novamente.

<img src="/ManutencaoTutoriais/filtro.png" width="400">

5.  Troque a válvula solenoide por uma nova

6.  Feche a tampa protetora

6.  Encha o tanque do robô com água novamente e deixe-o parado por um tempo para observar se existe algum vazamento

# Modelo S100

## Como trocar a chassis control board


# Geral

## Como duplicar um mapa

### Parte 1 — Baixar o mapa do robô original

1. Dentro da plataforma da Keenon, acesse "Operation and Maintenance Platform" → "Remote Operation and Maintenance" → "Remote Deployment"

2. Clique em "+Create"

3. Selecione o robô que já possui o mapa

4. Após conectar, acesse Map Management

5. Vá em: Settings → Advanced Settings → Download Map

6. Aguarde o download → Será gerado um arquivo .zip com o mapa

### Parte 2 — Preparar o robô que vai receber o mapa

(Se for o mesmo robô, pode pular essa parte)

7. Vincule o robô à loja (se ainda não estiver)

8. No Robot Installation Assistant:
    - Acesse Settings → Advanced Settings
    - Clique em Restore to Factory Default

9. Após reiniciar, siga os passos na tela para realizar o setup inicial

10. ⚠️ Importante:

    - No app principal: Acesse o menu Super Admin

    - Configure o Data Center = Other Region

(Dica: reconfigure também os outros parâmetros dentro deste menu)

### Parte 3 — Criar um mapa temporário

11. Crie um novo mapa simples no robô (não precisa ser detalhado — ele será sobrescrito)

12. Finalize o processo clicando em Complete Mapping (verifique na plataforma da Keenon se este novo mapa foi enviado corretamente. Caso não tenha sido, verifique o Data Center e o W-Fi e tente novamente)

### Parte 4 — Importar o mapa baixado

13. Dentro da plataforma da Keenon, acesse novamente "Operation and Maintenance Platform" → "Remote Operation and Maintenance" → "Remote Deployment"

14. Clique em "+Create"

15. Selecione o robô que vai receber o mapa

16. Após conectar, acesse Map Management

17. Vá em: Settings → Advanced Settings → Import from Local

18. Selecione o arquivo .zip baixado anteriormente

19. Clique em Map Upload e aguarde


### Parte 5 — Ajustes finais

O mapa será importado com os pontos e restrições, mas **não** inclui:

- Configurações gerais do app

- Organização das abas

- Rotas de louça personalizadas

- Áudio em Português (BR)

Portanto, ajuste de acordo com o que foi configurado no outro robô e não se esqueça de setar também as confugurações do menu Super Admin, se já não foram setadas.
