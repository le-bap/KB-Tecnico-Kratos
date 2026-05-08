# Introdução à Programação Android

O desenvolvimento Android é baseado na construção de aplicações executadas no sistema operacional Android, utilizando uma combinação de lógica de programação, interface gráfica e configurações de projeto. Atualmente, a plataforma oferece um ecossistema robusto para o desenvolvimento de aplicações modernas, escaláveis e compatíveis com diferentes dispositivos móveis.

De forma geral, um aplicativo Android é composto por três elementos principais:

- **Código-fonte (Java ou Kotlin):** lógica e comportamento da aplicação;
- **Interface do usuário (XML ou Jetpack Compose):** elementos visuais apresentados ao usuário;
- **Configurações do projeto (Gradle e Manifest):** controlam o processo de compilação, permissões e características da aplicação.

(Nosso projeto será desenvolvido utilizando **Java + XML**)

---

# Estrutura Básica de um Projeto Android

Ao criar um projeto no Android Studio, algumas estruturas fundamentais são geradas automaticamente:

## Diretório `app/`

O diretório `app/` representa o módulo principal da aplicação, contendo os arquivos responsáveis pelo funcionamento do projeto.

Dentro dele, destacam-se os seguintes componentes:

---

## `AndroidManifest.xml`

O arquivo `AndroidManifest.xml` é responsável por descrever informações essenciais da aplicação para o sistema Android.

Nele são definidas configurações como:

- Nome da aplicação;
- Permissões necessárias;
- Componentes principais da aplicação;
- Activity inicial responsável pela execução do app.

Exemplo de declaração de permissão:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

---

## Diretório `java/`

Esse diretório contém o código-fonte da aplicação.

Exemplo de uma Activity básica em Java:

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
```

A classe `MainActivity` geralmente representa a tela inicial da aplicação.

---

## Diretório `res/` (Resources)

O diretório `res/` armazena os recursos visuais e estáticos utilizados pela aplicação.

Principais subdiretórios:

- `layout/` → arquivos de interface em XML;
- `drawable/` → imagens e elementos gráficos;
- `values/` → cores, textos e temas da aplicação.

Exemplo de componente visual em XML:

```xml
<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Olá mundo"/>
```

---

# Gradle e Configuração do Projeto

O **Gradle** é o sistema responsável pela compilação e gerenciamento do projeto Android.

Por meio dele, são definidas:

- Dependências externas;
- Versões do Android utilizadas;
- Configurações de build;
- Plugins e bibliotecas da aplicação.

## `build.gradle (Project)`

Contém configurações globais do projeto.

## `build.gradle (Module: app)`

Arquivo responsável pelas configurações específicas do módulo principal da aplicação.

Exemplo:

```gradle
android {
    compileSdk 34

    defaultConfig {
        applicationId "com.exemplo.app"
        minSdk 24
        targetSdk 34
        versionCode 1
        versionName "1.0"
    }
}

dependencies {
    implementation 'androidx.appcompat:appcompat:1.6.1'
}
```

### Principais configurações

- `compileSdk` → versão utilizada para compilar a aplicação;
- `minSdk` → versão mínima suportada do Android;
- `targetSdk` → versão alvo da aplicação;
- `dependencies` → bibliotecas externas utilizadas no projeto.

---

# Componentes Fundamentais do Android

## Activity

Uma `Activity` representa uma tela da aplicação e é responsável pela interação principal com o usuário.

Exemplos:

- Tela de login;
- Tela de perfil;
- Tela de configurações.

---

## Intent

As `Intents` são utilizadas para comunicação entre componentes da aplicação, especialmente para navegação entre telas.

Exemplo:

```java
Intent intent = new Intent(this, SegundaActivity.class);
startActivity(intent);
```

---

## Layout

Os layouts definem a estrutura visual da interface da aplicação, geralmente desenvolvidos em XML.

---

## Fragment

Um `Fragment` representa uma parte reutilizável da interface, permitindo modularizar telas e componentes.

---

# Desenvolvimento de Interface

Atualmente, existem duas principais abordagens para criação de interfaces Android.

## XML

Modelo tradicional baseado na separação entre interface e lógica da aplicação.

Exemplo:

```xml
<Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Clique aqui"/>
```

---

# Dependências e Bibliotecas

As bibliotecas externas são adicionadas ao projeto por meio do Gradle.

Exemplo:

```gradle
implementation 'androidx.recyclerview:recyclerview:1.3.2'
```

Essas dependências fornecem funcionalidades adicionais, como componentes visuais, navegação, persistência de dados e integração com APIs.

---

# Processo de Execução da Aplicação

O fluxo básico de execução de uma aplicação Android ocorre da seguinte forma:

1. O desenvolvedor executa o projeto pelo Android Studio;
2. O Gradle realiza a compilação da aplicação;
3. O aplicativo é instalado em um emulador ou dispositivo físico;
4. O sistema inicia a `MainActivity`.
