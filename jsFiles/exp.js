

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
                <p>In Feel the Spin, you'll compete for a chance to win a <b>$100.00 bonus</b>.
                Specifically, you'll earn tokens. Your tokens will be entered into a lottery, and if one of your tokens is drawn, you'll win $100.00.</p>
                <p>The more tokens you earn, the greater your chances of winning $100.00.</p>
            </div>`,

            `<div class='parent'>
                <p>You'll earn tokens by spinning prize wheels.</p>
                <p>Each wheel is divided into 6 wedges, like this:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, one of the wedges will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge determines your earnings.</p>
                <p>In this example, you'd earn 3 tokens.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>After each spin, you'll see how many tokens you earned.</p>
                <p>Specifically, you'll see a message like this:</p>
                <div class="win-text-inst" style="color:#3CB44B; margin-bottom: 100px">+3 Tokens</div>
            </div>`,

            `<div class='parent'>
                <p>Typically, the wedge that lands on the arrow will activate.</p>
                <p>This is called a "standard outcome."</p>
                <p>Below is an example of a standard outcome.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Occasionally, a random wedge will activate instead.</p>
                <p>This is called a "random outcome."</p>
                <p>Here's an example of a random outcome:</p>
                <img src="./img/random-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome changes from wheel to wheel.</p>
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome is displayed before each wheel.</p>
                <p>For example, this message means that the next wheel has a 75% chance of a standard outcome and a 25% chance of a random outcome.</p>
                <img src="./img/outcome-75.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>After each spin, the arrow at the center of the wheel will change directions.</p>
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point up:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point right:</p>
                <img src="./img/arrow-right.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point down:</p>
                <img src="./img/arrow-down.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point left:</p>
                <img src="./img/arrow-left.png" style="width:50%; height:50%">      
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
                <p>In Feel the Spin, players compete for a chance to win a <b>$100.00 bonus</b>.
                Specifically, players earn tokens. Their tokens are entered into a lottery, and the player whose token is drawn wins $100.00.</p>
                <p>The more tokens a player earns, the greater their chances of winning $100.00.</p>
            </div>`,

            `<div class='parent'>
                <p>Players earn tokens by spinning prize wheels.</p>
                <p>Each wheel is divided into 6 wedges, like this:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>When a wheel stops spinning, one of the wedges will activate.</p>
                <p>The activated wedge will turn black, like this:</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The number on the activated wedge determines the player's earnings.</p>
                <p>In this example, the player would earn 3 tokens.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>Typically, the wedge that lands on the arrow will activate.</p>
                <p>This is called a "standard outcome."</p>
                <p>Below is an example of a standard outcome.</p>
                <img src="./img/standard-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>After each spin, the player sees how many tokens they earned.</p>
                <p>Specifically, they see a message like this:</p>
                <div class="win-text-inst" style="color:#3CB44B; margin-bottom: 100px">+3 Tokens</div>
            </div>`,

            `<div class='parent'>
                <p>Occasionally, a random wedge will activate instead.</p>
                <p>This is called a "random outcome."</p>
                <p>Here's an example of a random outcome:</p>
                <img src="./img/random-outcome.png" style="width:50%; height:50%">
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome changes from wheel to wheel.</p>
            </div>`,

            `<div class='parent'>
                <p>The chance of a standard outcome is displayed before each wheel.</p>
                <p>For example, this message means that the next wheel has a 75% chance of a standard outcome and a 25% chance of a random outcome.</p>
                <img src="./img/outcome-75.png" style="width:70%; height:70%">      
            </div>`,

            `<div class='parent'>
                <p>After each spin, the arrow at the center of the wheel will change directions.</p>
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point up:</p>
                <img src="./img/arrow-up.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point right:</p>
                <img src="./img/arrow-right.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point down:</p>
                <img src="./img/arrow-down.png" style="width:50%; height:50%">      
            </div>`,

            `<div class='parent'>
                <p>Sometimes the arrow will point left:</p>
                <img src="./img/arrow-left.png" style="width:50%; height:50%">      
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
            </div>`
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

    function pointsToWedges(nums) {
      const word = {
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
      };
      return nums.map(p => {
        const key = word[p];
        return wedges[key];
      });
    };

    // define each wheel
    let target_wheels = [

        {values: [ 3, 9, 9, 9, 9, 9 ], wheel_id: 1,  ev: 8,    hE: .65},
        {values: [ 3, 3, 3, 3, 3, 9 ], wheel_id: 2,  ev: 4,    hE: .65},

        {values: [ 3, 3, 9, 9, 9, 9 ], wheel_id: 3,  ev: 7,    hE: .92},
        {values: [ 3, 3, 3, 3, 9, 9 ], wheel_id: 4,  ev: 5,    hE: .92},

        {values: [ 3, 3, 3, 9, 9, 9 ], wheel_id: 5,  ev: 6,    hE: 1},

        {values: [ 3, 3, 3, 3, 6, 9 ], wheel_id: 6,  ev: 6,    hE: 1.25},
        {values: [ 3, 6, 6, 6, 6, 9 ], wheel_id: 7,  ev: 4.5,  hE: 1.25},
        {values: [ 3, 6, 9, 9, 9, 9 ], wheel_id: 8,  ev: 7.5,  hE: 1.25},

        {values: [ 3, 3, 3, 6, 6, 9 ], wheel_id: 9,  ev: 5,    hE: 1.46},
        {values: [ 3, 3, 3, 6, 9, 9 ], wheel_id: 10, ev: 5.5,  hE: 1.46},
        {values: [ 3, 6, 6, 6, 9, 9 ], wheel_id: 11, ev: 6.5,  hE: 1.46},
        {values: [ 3, 3, 6, 6, 6, 9 ], wheel_id: 12, ev: 5.5,  hE: 1.46},
        {values: [ 3, 6, 6, 9, 9, 9 ], wheel_id: 13, ev: 7,    hE: 1.46},
        {values: [ 3, 3, 6, 9, 9, 9 ], wheel_id: 14, ev: 6.5,  hE: 1.46},

        {values: [ 3, 3, 6, 6, 9, 9 ], wheel_id: 15, ev: 6,    hE: 1.58},

        {values: [ 3, 3, 3, 5, 7, 9 ], wheel_id: 16, ev: 5,    hE: 1.79},
        {values: [ 3, 5, 5, 5, 7, 9 ], wheel_id: 17, ev: 5.67, hE: 1.79},
        {values: [ 3, 5, 7, 7, 7, 9 ], wheel_id: 18, ev: 6.33, hE: 1.79},
        {values: [ 3, 5, 7, 9, 9, 9 ], wheel_id: 19, ev: 7,    hE: 1.79},

        {values: [ 3, 3, 5, 5, 7, 9 ], wheel_id: 20, ev: 5.33, hE: 1.92},
        {values: [ 3, 3, 5, 7, 7, 9 ], wheel_id: 21, ev: 5.67, hE: 1.92},
        {values: [ 3, 3, 5, 7, 9, 9 ], wheel_id: 22, ev: 6,    hE: 1.92},
        {values: [ 3, 5, 5, 7, 7, 9 ], wheel_id: 23, ev: 6,    hE: 1.92},
        {values: [ 3, 5, 5, 7, 9, 9 ], wheel_id: 24, ev: 6.33, hE: 1.92},
        {values: [ 3, 5, 7, 7, 9, 9 ], wheel_id: 25, ev: 6.67, hE: 1.92},

        {values: [ 3, 3, 4, 6, 8, 9 ], wheel_id: 26, ev: 5.5,  hE: 2.25},
        {values: [ 3, 4, 4, 6, 8, 9 ], wheel_id: 27, ev: 5.67, hE: 2.25},
        {values: [ 3, 4, 6, 6, 8, 9 ], wheel_id: 28, ev: 6,    hE: 2.25},
        {values: [ 3, 4, 6, 8, 8, 9 ], wheel_id: 29, ev: 6.33, hE: 2.25},
        {values: [ 3, 4, 6, 8, 9, 9 ], wheel_id: 30, ev: 6.5,  hE: 2.25},

        {values: [ 3, 4, 5, 6, 7, 9 ], wheel_id: 31, ev: 5.67, hE: 3},
        {values: [ 3, 5, 6, 7, 8, 9 ], wheel_id: 32, ev: 6.33, hE: 3},
    ];

    let reliability_idxs = jsPsych.randomization.repeat([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 1);
    let reliability_idx;
    const reliability = [.25, .5, .75, 1];
    const reliability_label = ["25%", "50%", "75%", "100%"];

    const MakeSpinLoop = function(play) {

        let outcome;
        let trial = 1;
        let round = 1;

        const preSpin = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function() {
                reliability_idx = reliability_idxs[round-1];
                let pct = reliability_label[reliability_idx];
                let html = `<div class='pFlip-style'>
                                <p><span style='font-size:100px'><strong>${pct}</strong></span>
                                <br><br><br>chance of standard outcome</p>
                            </div>`;
                return html;
            },
            choices: "NO_KEYS",
            trial_duration: 5000,
            response_ends_trial: false,
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), values: jsPsych.timelineVariable('values'), ev: jsPsych.timelineVariable('ev'), hE: jsPsych.timelineVariable('hE')},
            on_finish: function(data) {
                data.trial = trial;
                data.round = round;
                data.reliability_idx = reliability_idx;
                data.reliability = reliability[reliability_idx];
            }
        };

        // trial: spinner
        const spin = {
            type: jsPsychCanvasButtonResponse,
            stimulus: function(c, spinnerData) {
                let sectors = pointsToWedges(jsPsych.timelineVariable('values'))
                let reliability_idx = reliability_idxs[round-1];
                createSpinner(c, spinnerData, sectors, reliability[reliability_idx], true);
            },
            canvas_size: [500, 500],
            scoreBoard: function() {
                return '';
            },
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), values: jsPsych.timelineVariable('values'), ev: jsPsych.timelineVariable('ev'), hE: jsPsych.timelineVariable('hE')},
            on_finish: function(data) {
                data.trial = trial;
                data.round = round;
                outcome = data.outcomes_points;
                data.reliability_idx = reliability_idx;
                data.reliability = reliability[reliability_idx];
            }
        };

        const tokens = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function() {
                let standardFeedback;
                standardFeedback = `<div class="score-board-blank"></div> <div class="feedback-area"> <div class="win-text" style="color:${vibrantColors[outcome-3]}">+${outcome} Tokens</div>`;
                return standardFeedback;

            },
            choices: "NO_KEYS",
            trial_duration: 1500,
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), values: jsPsych.timelineVariable('values'), ev: jsPsych.timelineVariable('ev'), hE: jsPsych.timelineVariable('hE')},
            on_finish: function(data) {
                data.trial = trial;
                data.round = round;
                trial++;
                data.reliability_idx = reliability_idx;
                data.reliability = reliability[reliability_idx];
            },
        };

        const spin_loop = {
            timeline: [spin, tokens],
            repetitions: nTrials,
        };

        const flowMeasure_predict = {
            type: jsPsychCanvasLikert,
            stimulus: function(c, spinnerData) {
                let sectors = pointsToWedges(jsPsych.timelineVariable('values'))
                reliability_idx = reliability_idxs[round-1];
                createSpinner(c, spinnerData, sectors, reliability[reliability_idx], false);
            },
            reliability: () => {
                let reliability_idx = reliability_idxs[round-1];
                let pct = reliability_label[reliability_idx];
                return pct;
            },
            questions: [
                {prompt: `How <b>immersed</b> and <b>absorbed</b><br>would an average person feel spinning this wheel?`,
                name: `flow`,
                labels: ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>Extremely']},
            ],
            randomize_question_order: false,
            scale_width: 600,
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), values: jsPsych.timelineVariable('values'), ev: jsPsych.timelineVariable('ev'), hE: jsPsych.timelineVariable('hE')},
             on_finish: function(data) {
                data.trial = trial;
                data.round = round;
                data.reliability_idx = reliability_idx;
                data.reliability = reliability[reliability_idx];
                trial++;
                round++;
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
            data: {wheel_id: jsPsych.timelineVariable('wheel_id'), values: jsPsych.timelineVariable('values'), ev: jsPsych.timelineVariable('ev'), hE: jsPsych.timelineVariable('hE')},
             on_finish: function(data) {
                data.trial = trial - 1;
                data.round = round;
                data.reliability_idx = reliability_idx;
                data.reliability = reliability[reliability_idx];
                round++;
                saveSurveyData(data);
                randomizeWedgeColors();
            }
        };


        if (play == "play") {
            this.timeline = [preSpin, spin_loop, flowMeasure_play];
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
        experiment_id: "6NPKefSkFuj2",
        filename: filename,
        data_string: ()=>jsPsych.data.get().csv()
    };

    return p;

}());

const timeline = [exp.consent, exp.instLoop, exp.postIntro, exp.wheel_loop, exp.demographics, exp.save_data];

jsPsych.run(timeline);
