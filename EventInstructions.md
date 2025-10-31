# Workshop Instructions

## Prerequisites

Please complete the [setup](PreEventInstructions.html) before following these instructions.

---

## Zoom Meeting Links

### Your Personal AI - Run Models Locally - Part 1 15:00-15:40 IST (UTC+5.30):
https://us05web.zoom.us/j/85223029073?pwd=JShmU0xrVYD9MtrbJVpzVM5Rdkoqnk.1

### Your Personal AI - Run Models Locally - Part 2 16:00-16:40 IST (UTC+5.30):
https://us05web.zoom.us/j/88031573985?pwd=XXvbOA0BxAEamFl8cXKyCP3Zr76zcg.1

---

## Message from Andrew Ng

Watch Andrew Ng's special message for the Pie & AI: Pune event participants.

**Watch on YouTube:** https://www.youtube.com/watch?v=i1ssNgdlTT0

---

## Explore

Explore the [phi3:3.8b](https://ollama.com/library/phi3:3.8b) and [gemma3:4b](https://ollama.com/library/gemma3:4b) Open Source large language models (LLMs) in the Ollama model library. Note their sizes and intended uses. Do any intended uses match your requirements?

Look up [Ollama Turbo](https://ollama.com/turbo). Understand what it is and which models are available in it.

---

## Generate Content with Locally-Run Open Source Models

Running Open Source models locally gives you complete privacy, eliminates internet dependency, reduces costs, and provides full control over your AI interactions. Your data never leaves your device, making it ideal for sensitive work or areas with limited connectivity.

Popular tools for running models locally include [Ollama](https://ollama.com), [LM Studio](https://lmstudio.ai), and [GPT4All](https://gpt4all.io). For this event, we'll be using Ollama to run models locally.

### Demonstrate Offline Capability:

1. Start the Ollama desktop application.
2. From the Settings of the application, log out from your Ollama account. Also, enable Airplane mode.

Now the Ollama desktop application cannot connect to the internet or access models available online.

**Note:** These steps are only to emphasize that the installed models can run locally, stand-alone, without connectivity. Actually, Ollama by default runs smaller models like phi3:3.8b and gemma3:4b this way without requiring you to log out or enable Airplane mode.

Now you are ready to run the installed models locally and generate content using them.

### Run a Model Using Ollama Desktop Application:

1. In the Ollama desktop application, select the `phi3:3.8b` model.
2. Submit a prompt to generate content. See some prompt examples [here](Prompts.html).

### Run a Model Using Ollama Command Line Interface (CLI):

1. In a Command Prompt or terminal, run the following command:
   ```bash
   ollama run gemma3:4b
   ```

2. Enter your prompt text to generate content and press Enter. See some prompt examples [here](Prompts.html).
   You should see a response appear in the CLI window.

3. To stop the model at any time, enter the following command and press Enter:
   ```bash
   /bye
   ```

---

## Generate Content Using Online Open Source Models

Models performing tasks like image generation require more computational resources and memory than text-only models. Therefore, they are run online instead of locally to ensure optimal performance and access to powerful hardware.

### Ollama Turbo Mode

Ollama provides a Turbo mode that gives access to larger, more capable models online, such as `gpt-oss:120b`, which would be impractical to run locally due to their massive size and resource requirements. Try prompting the gpt-oss:120b model in Ollama desktop application with Turbo mode enabled. See some prompt examples [here](Prompts.html).

### Hugging Face Spaces

[Hugging Face Spaces](https://huggingface.co/spaces) can also be used to run models online, providing free access to various AI models. For example, you can try the [Qwen Image model](https://huggingface.co/spaces/Qwen/Qwen-Image) for image generation and analysis tasks. Try prompting the Qwen Image model to generate images and infographics. See some prompt examples [here](Prompts.html).

---

## Conversation Log - 2025-10-31

### Task 1: Update Eventbrite Link in PreEventInstructions.html

**User Request:**
> In the Pre-eventFind the eventbrite link in PreEventInstructions.html and replace it with new link:https://www.eventbrite.com/e/pie-ai-pune-your-personal-ai-run-models-locally-tickets-1918807698479?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl

**Action Taken:**
- Located the Eventbrite link in PreEventInstructions.html at line 632
- Replaced old link: `https://www.eventbrite.com/e/pie-ai-pune-content-generation-with-open-source-models-tickets-1657864269659?aff=oddtdtcreator`
- With new link: `https://www.eventbrite.com/e/pie-ai-pune-your-personal-ai-run-models-locally-tickets-1918807698479?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl`

**Status:** ✅ Completed

---

### Task 2: Align Banner Image and Eventbrite Links in EventExplore.html

**User Request:**
> Now Align the banner image and eventbrite links of eventexplore.html to those used in PreEventInstructions.html

**Action Taken:**
- Updated banner image in EventExplore.html (line 441):
  - Changed from: `OpenSourceEventBanner.png`
  - Changed to: `OpenSourceEventBanner_techWriter.png`
  - Updated max-width from `100%` to `70%` to match PreEventInstructions.html styling
  - Updated alt text to: "Pie & AI Pune: Your Personal AI – Run Models Locally Banner"
- Note: EventExplore.html doesn't contain direct Eventbrite links - it only references PreEventInstructions.html for setup, which already has the updated link

**Status:** ✅ Completed

---

### Task 3: Fix Video Player Configuration Error in EventExplore.html

**User Request:**
> Check the video player configuration error in EventExplore.html and fix it.

**Initial Action:**
- Added proper YouTube iframe attributes including `allow`, `referrerpolicy`, and `loading` attributes

**User Feedback:**
> No, the error is still there and the video does not show. Error 153

**Root Cause:**
- Error 153 is a YouTube embedding restriction error
- The video owner has disabled embedding on external websites
- This is not a configuration issue but a restriction set by the content owner

**Final Solution:**
- Replaced embedded iframe video player with a direct YouTube link button (lines 469-476)
- Implemented as a styled "Watch on YouTube" button with YouTube icon
- Opens video in new tab directly on YouTube.com
- Maintains hover effects for better user experience
- Preserves the same messaging about Andrew Ng's special message

**Status:** ✅ Completed

---

© 2025 Mugdha Vairagade. All rights reserved.
