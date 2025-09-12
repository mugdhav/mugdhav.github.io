# Pre-Event Instructions - Pie & AI: Pune

## Pie & AI: Pune - Content Generation with Open Source Models

Greetings, fellow explorer!

Thanks for registering for the event **[Pie & AI: Pune - Content Generation with Open Source Models](https://www.eventbrite.com/e/pie-ai-pune-content-generation-with-open-source-models-tickets-1657864269659?aff=oddtdtcreator)**.

To get the most from this event, please perform these quick setup steps before the event:

## Pre-Event Setup Steps

1. **Create a CoRover.ai BharatGPT account** here: [https://builder.corover.ai/#/auth/register](https://builder.corover.ai/#/auth/register). You can use your existing Gmail ID for this.
   
   *Already have a CoRover.ai BharatGPT account? Then log into it and await instructions.*

2. **Create an account for Sarvam AI** here: [https://dashboard.sarvam.ai/signin](https://dashboard.sarvam.ai/signin). Use your existing Gmail or Microsoft ID for this.
   
   *Already have a Sarvam AI account? Then log into it and await instructions.*

3. **Optionally, if you are a developer** interested in exploring Indian LLM APIs, then:
   
   a. Log into your Sarvam AI account and click Get API Key on Sarvam AI Dashboard here: [https://dashboard.sarvam.ai](https://dashboard.sarvam.ai). Save the API Key.
   
   b. Create your Google Colab account here: [https://colab.research.google.com](https://colab.research.google.com). Use your existing Gmail ID for this.
   
   *Skip these steps, if you are not interested development with Indian LLM APIs.*

**That's it!** You are all set for the event.

---

## Event Instructions

### Message from Andrew Ng

Watch Andrew Ng's special message for the Pie & AI: Pune event participants:

[**Watch Video: Message from Andrew Ng**](https://www.youtube.com/watch?v=i1ssNgdlTT0)

### 1. Chat with Sarvam AI in Native Language

**Important:** Before following these steps, follow the [set-up instructions](PreEventInstructions.html).

1. Log into your Sarvam AI account and access its [Chat interface](https://dashboard.sarvam.ai/chat).

2. Enter prompts the same ways you would on ChatGPT/Perplexity/Gemini. Compare AI chat responses to those from ChatGPT/Perplexity/Gemini.

3. Try prompting in your native language. You can use [Google Input Tools](https://www.google.co.in/inputtools/try/) to prepare text prompts in your native language. Does AI respond automatically in your native language and script?

**Some examples:**

- `How many times can one change one's address in adhar? Krupaya hindi me uttar den`

- `पुणे से चेन्नई १७ सितम्बर २०२५  को कौनसी ट्रैन हैं , जिनमें कनफर्म्ड आरक्षण मिल सकता है ? मुझे uptodate जानकारी चाहिए.`

- `पुणे महानगर परिवहन च्या buses वर पु . ल . देशपांडे यांच्या शैलीत एक विनोदी पॅराग्राफ लिहा`

- `लेह, लद्दाख  सडक मार्ग से पेलिंग, सिक्किम से  कितने KM दूर  है?`

- `Translate into Tamil and show the translation in both roman and Tamil scripts: You are most welcome!`

### 2. Build A Hindi Chat Agent with BharatGPT

**Important:** Before following these steps, follow the [set-up instructions](PreEventInstructions.html).

1. Log into your [CoRover.ai BharatGPT account](https://builder.corover.ai). Click Create AI Agent on its [dashboard](https://builder.corover.ai/#/onboarding/add-bot), then click Via Form.

2. In Basic Info, set these values for your agent:
   - Select your AI Agent's languages: **Hindi**
   - Select AI Agent type: **Chatbot** Also select **Click, Voice, Text**
   - Choose language: **Hindi**
   - Enter your AI Agent name: **सहायिका**
   - Add welcome message: **नमस्ते, मैं आपकी डिजिटल सहायिका हूँ.**
   - Add a placeholder: **आपका प्रश्न क्या है?**
   - Add fallback message: **क्षमा करें। मुझे इस विषय पर समुचित जानकारी नहीं है. क्या आप कोई और प्रश्न पूछना चाहते हैं?**

3. Click Continue to move to Branding.

4. In Branding, select agent icon and color of your choice. Click Continue to move to Power Up.

5. In Power Up, set these values for your agent:
   - Select Response layer: **Prompt (Generative AI)**
   - Choose LLM model: **BharatGPT Internet**

6. Click Create AI Agent. Your Hindi Chat Agent is ready.

7. Click Test AI Agent to test it. Try chatting with it in your native language using [Google Input Tools](https://www.google.co.in/inputtools/try/).

**Demo Video:** [BharatGPT Hindi Chatbot in Action](https://www.youtube.com/watch?v=BMlY6wA9zjU)

### 3. Build Indian Language Translator with Sarvam API

**Important:** Before following these steps, follow the [set-up instructions](PreEventInstructions.html).

1. Log into your Google Colab account. In Secrets pane 🔑, add a new secret with Name **sarvam**. As the secret's Value, enter the API key you created from Sarvam dashboard. Enable the Notebook access to the secret.

2. Download the [sarvam_translator.ipynb](LocalContent/sarvam_translator.ipynb) file (notebook). Upload this notebook in your Google Colab from File > Upload Notebook menu.

3. Explore the code in the notebook.
   
   *The notebook contains a Python program that can translate your input in any Indian language to another Indian language of your choice using the Sarvam API. See [Sarvam API documentation](https://docs.sarvam.ai/api-reference-docs/api-guides-tutorials/text-processing/translation).*

4. Use [Google Input Tools](https://www.google.co.in/inputtools/try/) to prepare text of your choice in any Indian language.

5. Run the notebook. When prompted for input, enter the text you prepared using Google Input Tools.

---

*© 2025 Mugdha Vairagade. All rights reserved.*