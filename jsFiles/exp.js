

const exp = (function() {


    var p = {};

    const playOrPredict = ["play", "predict"][Math.floor(Math.random() * 2)]; 

    // const playOrPredict = ["play", "predict"][0]; 

    const nTrials = 5;

    jsPsych.data.addProperties({
        playOrPredict: playOrPredict,
    });


   /*
    *
    *   INSTRUCTIONS
    *
    */

    const html = {
        intro_play: [
            `<div class='parent'>
                <p><strong>Welcome to Feel the Spin!</strong></p>
                <p>In Feel the Spin, you'll spin a series of prize wheels.</p>
                <p>With each spin, you'll earn points.</p>
                <p>Your goal is to earn as many points as possible!</p>
            </div>`,

            `<div class='parent'>
                <p>Each wheel has six wedges, like this:</p>
                <img src="./img/pre-pic.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, the wedge it lands on will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/post-pic.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge is added to your score.</p>
                <p>For example, in this scenario, you'd receive 8 points.</p>
                <img src="./img/post-pic.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>After each spin, you'll see how many points you earned.</p>
                <p>Specifically, you'll see a message like this:</p>
                <div class="win-text-inst" style="color:grey; margin-bottom: 100px">+8 Points</div>
            </div>`,

            `<div class='parent'>
                <p>To spin a prize wheel, just grab and pull it with your cursor.</p>
                <p>Watch the animation below to see how it's done.</p>
                <img src="./img/spin-gif.gif" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Throughout Feel the Spin, you'll answer questions about your feelings.</p>
                <p>Specifically, you'll report how <b>immersed</b> and <b>absorbed</b> you felt spinning each wheel.</p>
                <p><b>IMPORTANT:</b> You will <i>not</i> rate how much you liked or enjoyed spinning each wheel. The focus is solely on your sense of immersion and absorption.</p>
            </div>`,
        ],

        intro_predict: [
            `<div class='parent'>
                <p><strong>Welcome to Feel the Spin!</strong></p>
                <p>In Feel the Spin, players spin a series of prize wheels.</p>
                <p>With each spin, players earn points.</p>
                <p>The goal is to earn as many points as possible!</p>
            </div>`,

            `<div class='parent'>
                <p>Each wheel has six wedges, like this:</p>
                <img src="./img/pre-pic.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, the wedge it lands on will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/post-pic.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge is added to the player's score.</p>
                <p>For example, in this scenario, the player would receive 8 points.</p>
                <img src="./img/post-pic.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>After each spin, the player sees how many points they earned.</p>
                <p>Specifically, they see a message like this:</p>
                <div class="win-text-inst" style="color:grey; margin-bottom: 100px">+8 Points</div>
            </div>`,

            `<div class='parent'>
                <p>To spin a prize wheel, players just grab and pull it with their cursor.</p>
                <p>Watch the animation below to see how it's done.</p>
                <img src="./img/spin-gif.gif" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Throughout Feel the Spin, players answer questions about their feelings.</p>
                <p>Specifically, players report how <b>immersed</b> and <b>absorbed</b> they felt spinning each wheel.</p>
                <p><b>IMPORTANT:</b> Players do <i>not</i> rate how much they liked or enjoyed spinning each wheel. The focus is solely on their sense of immersion and absorption.</p>
            </div>`,

            `<div class='parent'>
                <p>Your goal in Feel the Spin is to guess how <b>immersed</b> and <b>absorbed</b> an average person would feel while spinning different wheels.</p>
                <p>You'll see descriptions of different wheels. For each description, your job is to guess how <b>immersed</b> and <b>absorbed</b> an average person would feel while spinning the corresponding wheel.</p>
                <p>Simply provide your best guess about the typical experience.</p>
            </div>`,   

            `<div class='parent'>
                <p>Each description looks like this:</p>
                <table class="stats-table">
                    <tr>
                        <td style="color:#4363D8">3<br><br>(x1)</td>
                        <td style="color:#911EB4">9<br><br>(x5)</td>
                    </tr>
                </table>
            </div>`,   

            `<div class='parent'>
                <table class="stats-table">
                    <tr>
                        <td style="color:#4363D8">3<br><br>(x1)</td>
                        <td style="color:#911EB4">9<br><br>(x5)</td>
                    </tr>
                </table>
                <p>This description refers to a wheel with:</p>
                <p>1 blue wedge worth 3 points</br>5 purple wedges worth 9 points</p>
                <img src="./img/example1.png" style="width:40%; height:40%">
            </div>`,   

            `<div class='parent'>
                <p>Here's another example:</p>
                <table class="stats-table">
                    <tr>
                        <td style="color:#E6194B">3<br><br>(x3)</td>
                        <td style="color:#F58231">5<br><br>(x1)</td>
                        <td style="color:#3CB44B">7<br><br>(x1)</td>
                        <td style="color:#4363D8">9<br><br>(x1)</td>
                    </tr>
                </table>
                <p>This description refers to a wheel with:</p> 
                <p>3 red wedges worth 3 points<br>1 orange wedge with 5 points<br>1 green wedge worth 7 points<br>1 blue wedge worth 9 points:</p>
                <img src="./img/example2.png" style="width:40%; height:40%">
            </div>`,

            `<div class='parent'>
                <p>REMEMBER: For each description, your job is to guess how <b>immersed</b> and <b>absorbed</b> an average person would feel while spinning the corresponding wheel.</p>
                <p>Simply provide your best guess about the typical experience.</p>
            </div>`,  
        ],

        postIntro: [   

            `<div class='parent'>
                <p>You're ready to begin Feel the Spin!</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        postTask: [
            `<div class='parent'>
                <p>Feel the Spin is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],
    };


    const intro = {
        type: jsPsychInstructions,
        pages: (playOrPredict == "play") ? html.intro_play : html.intro_predict,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    const correctAnswer_play = [`I will report how immersed and absorbed I felt spinning each wheel.`];

    const correctAnswer_predict = [`I will predict how immersed and absorbed an average person would feel spinning each wheel.`];

    const correctAnswer = (playOrPredict == "play") ? correctAnswer_play : correctAnswer_predict;

    const options_play = [
        `I will report how happy I felt spinning each wheel.`, 
        `I will report how much I enjoyed spinning each wheel.`,
        `I will report how immersed and absorbed I felt spinning each wheel.`,
        `I will report how much I liked spinning each wheel.`
    ];

    const options_predict = [
        `I will predict how happy an average person would feel spinning each wheel.`, 
        `I will predict how much an average person would enjoy spinning each wheel.`,
        `I will predict how immersed and absorbed an average person would feel spinning each wheel.`,
        `I will predict how much an average person would like spinning each wheel.`];

    const options = (playOrPredict == "play") ? options_play : options_predict;

    const errorMessage = {
        type: jsPsychInstructions,
        pages: [`<div class='parent'><p>You provided the wrong answer.<br>To make sure you understand the game, please continue to re-read the instructions.</p></div>`],
        show_clickable_nav: true,
        allow_keys: false,
    };

    const attnChk = {
        type: jsPsychSurveyMultiChoice,
        preamble: `<div class='parent'>
            <p>Please answer the following question.</p>
            </div>`,
        questions: [
            {
                prompt: `Which of the following statements is true?`, 
                name: `attnChk1`, 
                options: options,
            },
        ],
        scale_width: 500,
        on_finish: (data) => {
              const totalErrors = getTotalErrors(data, correctAnswer);
              data.totalErrors = totalErrors;
        },
    };

    const conditionalNode = {
      timeline: [errorMessage],
      conditional_function: () => {
        const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.instLoop = {
      timeline: [intro, attnChk, conditionalNode],
      loop_function: () => {
        const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
        return fail;
      },
    };

    p.postIntro = {
        type: jsPsychInstructions,
        pages: html.postIntro,
        show_clickable_nav: true,
        post_trial_gap: 500,
        allow_keys: false,
    };

    p.consent = {
        type: jsPsychExternalHtml,
        url: "./html/consent.html",
        cont_btn: "advance",
    };

    
   /*
    *
    *   TASK
    *
    */

    let vibrantColors = ["#E6194B", "#3CB44B", "#4363D8", "#F58231", "#911EB4", "#46F0F0", "#FFE119"];

    vibrantColors = jsPsych.randomization.repeat(vibrantColors, 1);

    // define each wedge
    const wedges = {
        three: {color: null, font: 'white', label:"3", points: 3},
        four: {color: null, font: 'white', label:"4", points: 4},
        five: {color: null, font: 'white', label:"5", points: 5},
        six: {color: null, font: 'white', label:"6", points: 6},
        seven: {color: null, font: 'white', label:"7", points: 7},
        eight: {color: null, font: 'white', label:"8", points: 8},
        nine: {color: null, font: 'white', label:"9", points: 9},
    };

    const randomizeWedgeColors = () => {
      vibrantColors = jsPsych.randomization.repeat(vibrantColors, 1);
      Object.keys(wedges).forEach((key, idx) => { wedges[key].color = vibrantColors[idx] });
      return wedges;
    };
    
    randomizeWedgeColors();

    const buildStatsTable = (nums, probs, wedges) => {
      const colors = Object.values(wedges).map(w => w.color);

      // Build the <td> cells
      const tds = nums.map((num, i) => `<td style="color:${colors[i]}">${num}<br><br>(x${probs[i]})</td>`).join("");

      // Wrap everything in <table> … </table>
      return `
        <table class="stats-table">
          <tr>${tds}</tr>
        </table>`;
    };

    // define each wheel
    let target_wheels = [

        {sectors: [ wedges.three, wedges.nine, wedges.nine, wedges.nine, wedges.nine, wedges.nine ],     wheel_id: 1, reliability: 1, nums: [3, 9], probs: [1, 5], label: "100%", ev: 8, mi: .65},
        {sectors: [ wedges.three, wedges.three, wedges.three, wedges.three, wedges.three, wedges.nine ], wheel_id: 2, reliability: 1, nums: [3, 9], probs: [5, 1], label: "100%", ev: 4, mi: .65},

        {sectors: [ wedges.three, wedges.three, wedges.nine, wedges.nine, wedges.nine, wedges.nine ],    wheel_id: 3, reliability: 1, nums: [3, 9], probs: [2, 4], label: "100%", ev: 7, mi: .92},
        {sectors: [ wedges.three, wedges.three, wedges.three, wedges.three, wedges.nine, wedges.nine ],  wheel_id: 4, reliability: 1, nums: [3, 9], probs: [4, 2], label: "100%", ev: 5, mi: .92},

        {sectors: [ wedges.three, wedges.three, wedges.three, wedges.nine, wedges.nine, wedges.nine ],   wheel_id: 5, reliability: 1, nums: [3, 9], probs: [3, 3], label: "100%", ev: 6, mi: 1},

        {sectors: [ wedges.three, wedges.three, wedges.three, wedges.three, wedges.six, wedges.nine ],   wheel_id: 6, reliability: 1, nums: [3, 6, 9], probs: [4, 1, 1], label: "100%", ev: 6, mi: 1.25},
        {sectors: [ wedges.three, wedges.six, wedges.six, wedges.six, wedges.six, wedges.nine ],         wheel_id: 7, reliability: 1, nums: [3, 6, 9], probs: [1, 4, 1], label: "100%", ev: 4.5, mi: 1.25},
        {sectors: [ wedges.three, wedges.six, wedges.nine, wedges.nine, wedges.nine, wedges.nine ],      wheel_id: 8, reliability: 1, nums: [3, 6, 9], probs: [1, 1, 4], label: "100%", ev: 7.5, mi: 1.25},

        {sectors: [ wedges.three, wedges.three, wedges.three, wedges.six, wedges.six, wedges.nine ],     wheel_id: 9, reliability: 1, nums: [3, 6, 9], probs: [3, 2, 1], label: "100%", ev: 5, mi: 1.46},
        {sectors: [ wedges.three, wedges.three, wedges.three, wedges.six, wedges.nine, wedges.nine ],    wheel_id: 10, reliability: 1, nums: [3, 6, 9], probs: [3, 1, 2], label: "100%", ev: 5.5, mi: 1.46},
        {sectors: [ wedges.three, wedges.six, wedges.six, wedges.six, wedges.nine, wedges.nine ],        wheel_id: 11, reliability: 1, nums: [3, 6, 9], probs: [1, 3, 2], label: "100%", ev: 6.5, mi: 1.46},
        {sectors: [ wedges.three, wedges.three, wedges.six, wedges.six, wedges.six, wedges.nine ],       wheel_id: 12, reliability: 1, nums: [3, 6, 9], probs: [2, 3, 1], label: "100%", ev: 5.5, mi: 1.46},
        {sectors: [ wedges.three, wedges.six, wedges.six, wedges.nine, wedges.nine, wedges.nine ],       wheel_id: 13, reliability: 1, nums: [3, 6, 9], probs: [1, 2, 3], label: "100%", ev: 7, mi: 1.46},
        {sectors: [ wedges.three, wedges.three, wedges.six, wedges.nine, wedges.nine, wedges.nine ],     wheel_id: 14, reliability: 1, nums: [3, 6, 9], probs: [2, 1, 3], label: "100%", ev: 6.5, mi: 1.46},

        {sectors: [ wedges.three, wedges.three, wedges.six, wedges.six, wedges.nine, wedges.nine ],      wheel_id: 15, reliability: 1, nums: [3, 6, 9], probs: [2, 2, 2], label: "100%", ev: 6, mi: 1.58},

        {sectors: [ wedges.three, wedges.three, wedges.three, wedges.five, wedges.seven, wedges.nine ],  wheel_id: 16, reliability: 1, nums: [3, 5, 7, 9], probs: [3, 1, 1, 1], label: "100%", ev: 5, mi: 1.79},
        {sectors: [ wedges.three, wedges.five, wedges.five, wedges.five, wedges.seven, wedges.nine ],    wheel_id: 17, reliability: 1, nums: [3, 5, 7, 9], probs: [1, 3, 1, 1], label: "100%", ev: 5.67, mi: 1.79},
        {sectors: [ wedges.three, wedges.five, wedges.seven, wedges.seven, wedges.seven, wedges.nine ],  wheel_id: 18, reliability: 1, nums: [3, 5, 7, 9], probs: [1, 1, 3, 1], label: "100%", ev: 6.33, mi: 1.79},
        {sectors: [ wedges.three, wedges.five, wedges.seven, wedges.nine, wedges.nine, wedges.nine ],    wheel_id: 19, reliability: 1, nums: [3, 5, 7, 9], probs: [1, 1, 1, 3], label: "100%", ev: 7, mi: 1.79},

        {sectors: [ wedges.three, wedges.three, wedges.five, wedges.five, wedges.seven, wedges.nine ],   wheel_id: 20, reliability: 1, nums: [3, 5, 7, 9], probs: [2, 2, 1, 1], label: "100%", ev: 5.33, mi: 1.92},
        {sectors: [ wedges.three, wedges.three, wedges.five, wedges.seven, wedges.seven, wedges.nine ],  wheel_id: 21, reliability: 1, nums: [3, 5, 7, 9], probs: [2, 1, 2, 1], label: "100%", ev: 5.67, mi: 1.92},
        {sectors: [ wedges.three, wedges.three, wedges.five, wedges.seven, wedges.nine, wedges.nine ],   wheel_id: 22, reliability: 1, nums: [3, 5, 7, 9], probs: [2, 1, 1, 2], label: "100%", ev: 6, mi: 1.92},
        {sectors: [ wedges.three, wedges.five, wedges.five, wedges.seven, wedges.seven, wedges.nine ],   wheel_id: 23, reliability: 1, nums: [3, 5, 7, 9], probs: [1, 2, 2, 1], label: "100%", ev: 6, mi: 1.92},
        {sectors: [ wedges.three, wedges.five, wedges.five, wedges.seven, wedges.nine, wedges.nine ],    wheel_id: 24, reliability: 1, nums: [3, 5, 7, 9], probs: [1, 2, 1, 2], label: "100%", ev: 6.33, mi: 1.92},
        {sectors: [ wedges.three, wedges.five, wedges.seven, wedges.seven, wedges.nine, wedges.nine ],   wheel_id: 25, reliability: 1, nums: [3, 5, 7, 9], probs: [1, 1, 2, 2], label: "100%", ev: 6.67, mi: 1.92},

        {sectors: [ wedges.three, wedges.three, wedges.four, wedges.six, wedges.eight, wedges.nine ],    wheel_id: 26, reliability: 1, nums: [3, 4, 6, 8, 9], probs: [2, 1, 1, 1, 1], label: "100%", ev: 5.5, mi: 2.25},
        {sectors: [ wedges.three, wedges.four, wedges.four, wedges.six, wedges.eight, wedges.nine ],     wheel_id: 27, reliability: 1, nums: [3, 4, 6, 8, 9], probs: [1, 2, 1, 1, 1], label: "100%", ev: 5.67, mi: 2.25},
        {sectors: [ wedges.three, wedges.four, wedges.six, wedges.six, wedges.eight, wedges.nine ],      wheel_id: 28, reliability: 1, nums: [3, 4, 6, 8, 9], probs: [1, 1, 2, 1, 1], label: "100%", ev: 6, mi: 2.25},
        {sectors: [ wedges.three, wedges.four, wedges.six, wedges.eight, wedges.eight, wedges.nine ],    wheel_id: 29, reliability: 1, nums: [3, 4, 6, 8, 9], probs: [1, 1, 1, 2, 1], label: "100%", ev: 6.33, mi: 2.25},
        {sectors: [ wedges.three, wedges.four, wedges.six, wedges.eight, wedges.nine, wedges.nine ],     wheel_id: 30, reliability: 1, nums: [3, 4, 6, 8, 9], probs: [1, 1, 1, 1, 2], label: "100%", ev: 6.5, mi: 2.25},

        {sectors: [ wedges.three, wedges.four, wedges.five, wedges.six, wedges.seven, wedges.nine ],     wheel_id: 31, reliability: 1, nums: [3, 4, 5, 6, 7, 9], probs: [1, 1, 1, 1, 1, 1], label: "100%", ev: 5.67, mi: 3},
        {sectors: [ wedges.three, wedges.five, wedges.six, wedges.seven, wedges.eight, wedges.nine ],    wheel_id: 32, reliability: 1, nums: [3, 5, 6, 7, 8, 9], probs: [1, 1, 1, 1, 1, 1], label: "100%", ev: 6.33, mi: 3},

    ];

    const MakeSpinLoop = function(play) {

        let outcome;
        let trial = 1;

        // trial: spinner
        const spin = {
            type: jsPsychCanvasButtonResponse,
            stimulus: function(c, spinnerData) {
                console.log(jsPsych.timelineVariable('nums'), jsPsych.timelineVariable('probs'), jsPsych.timelineVariable('ev'), jsPsych.timelineVariable('mi'))
                createSpinner(c, spinnerData, jsPsych.timelineVariable('sectors'), false, true);
            },
            canvas_size: [500, 500],
            scoreBoard: function() {
                return '';
            },
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), mi: jsPsych.timelineVariable('mi'), nums: jsPsych.timelineVariable('nums'), probs: jsPsych.timelineVariable('probs')},
            on_finish: function(data) {
                data.trial = trial;
                outcome = data.outcome;
            }
        };

        const tokens = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function() {
                let standardFeedback;

                standardFeedback = `<div class="score-board-blank"></div> <div class="feedback-area"> <div class="win-text" style="color:${vibrantColors[outcome-3]}">+${outcome} Points</div>`;

                return standardFeedback;

            },
            choices: "NO_KEYS",
            trial_duration: 2000,
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), mi: jsPsych.timelineVariable('mi'), nums: jsPsych.timelineVariable('nums'), probs: jsPsych.timelineVariable('probs')},
            on_finish: function(data) {
                data.trial = trial;
                trial++;
            },
        };

        const spin_loop = {
            timeline: [spin, tokens],
            repetitions: nTrials,
        };

        const flowMeasure_predict = {
            type: jsPsychSurveyLikert,
            preamble: () => {
                let wheelStats = buildStatsTable(jsPsych.timelineVariable('nums'), jsPsych.timelineVariable('probs'), wedges)
                return wheelStats;
            },
            questions: [
                {prompt: `How <b>immersed</b> and <b>absorbed</b><br>would an average person feel spinning this wheel?`,
                name: `flow`,
                labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
            ],
            randomize_question_order: false,
            scale_width: 600,
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), mi: jsPsych.timelineVariable('mi'), nums: jsPsych.timelineVariable('nums'), probs: jsPsych.timelineVariable('probs')},
             on_finish: function(data) {
                data.trial = trial - 1;
                saveSurveyData(data);
                randomizeWedgeColors();
            }
        };

        const flowMeasure_play = {
            type: jsPsychSurveyLikert,
            questions: [
                {prompt: `How <b>immersed</b> and <b>absorbed</b><br>did you feel spinning the last wheel?`,
                name: `flow`,
                labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
            ],
            randomize_question_order: false,
            scale_width: 600,
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), ev: jsPsych.timelineVariable('ev'), mi: jsPsych.timelineVariable('mi'), nums: jsPsych.timelineVariable('nums'), probs: jsPsych.timelineVariable('probs')},
             on_finish: function(data) {
                data.trial = trial - 1;
                saveSurveyData(data);
                randomizeWedgeColors();
            }
        };


        if (play == "play") {
            this.timeline = [spin_loop, flowMeasure_play];
        } else {
            this.timeline = [flowMeasure_predict];
        };
        this.timeline_variables = target_wheels;
        this.randomize_order = true;
        this.sample = {type: 'without-replacement', size: 16}
    }


    p.wheel_loop = new MakeSpinLoop(playOrPredict)


   /*
    *
    *   Demographics
    *
    */

    p.demographics = (function() {


        const taskComplete = {
            type: jsPsychInstructions,
            pages: html.postTask,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const gender = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your gender?</p>',
            choices: ['Male', 'Female', 'Other'],
            on_finish: (data) => {
                data.gender = data.response;
            }
        };

        const age = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Age:", name: "age"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const ethnicity = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your race?</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other'],
            on_finish: (data) => {
                data.ethnicity = data.response;
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const demos = {
            timeline: [taskComplete, gender, age, ethnicity, english, finalWord]
        };

        return demos;

    }());


   /*
    *
    *   SAVE DATA
    *
    */

    p.save_data = {
        type: jsPsychPipe,
        action: "save",
        experiment_id: "X3VBu7dQfWnz",
        filename: filename,
        data_string: ()=>jsPsych.data.get().csv()
    };

    return p;

}());

const timeline = [exp.consent, exp.instLoop, exp.postIntro, exp.wheel_loop, exp.demographics, exp.save_data];

jsPsych.run(timeline);
