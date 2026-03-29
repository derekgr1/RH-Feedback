/*********************** 
 * Feedback Final *
 ***********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Feedback final';  // from the Builder filename that created this script
let expInfo = {
    'Student ID #': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_4
window.trial_counter = 0;
window.last5_acc = [];
window.show_feedback = false;
window.block_accuracy = 0;
window.feedback_text = "";
window.acc = 0;

// random assignment once per run
window.fb_condition = (Math.random() < 0.5) ? "feedback" : "no_feedback";
window.allow_feedback = (window.fb_condition === "feedback");

// optional debug
console.log("fb_condition:", window.fb_condition);
console.log("allow_feedback:", window.allow_feedback);
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent_prepRoutineBegin());
flowScheduler.add(consent_prepRoutineEachFrame());
flowScheduler.add(consent_prepRoutineEnd());
flowScheduler.add(consent_pt1RoutineBegin());
flowScheduler.add(consent_pt1RoutineEachFrame());
flowScheduler.add(consent_pt1RoutineEnd());
flowScheduler.add(consent_pt2RoutineBegin());
flowScheduler.add(consent_pt2RoutineEachFrame());
flowScheduler.add(consent_pt2RoutineEnd());
flowScheduler.add(consent_pt3RoutineBegin());
flowScheduler.add(consent_pt3RoutineEachFrame());
flowScheduler.add(consent_pt3RoutineEnd());
flowScheduler.add(do_your_bestRoutineBegin());
flowScheduler.add(do_your_bestRoutineEachFrame());
flowScheduler.add(do_your_bestRoutineEnd());
flowScheduler.add(emailRoutineBegin());
flowScheduler.add(emailRoutineEachFrame());
flowScheduler.add(emailRoutineEnd());
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
const RLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RLoopLoopBegin(RLoopLoopScheduler));
flowScheduler.add(RLoopLoopScheduler);
flowScheduler.add(RLoopLoopEnd);


flowScheduler.add(city_size_instructionRoutineBegin());
flowScheduler.add(city_size_instructionRoutineEachFrame());
flowScheduler.add(city_size_instructionRoutineEnd());
const JLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(JLoopLoopBegin(JLoopLoopScheduler));
flowScheduler.add(JLoopLoopScheduler);
flowScheduler.add(JLoopLoopEnd);



flowScheduler.add(post_quest2RoutineBegin());
flowScheduler.add(post_quest2RoutineEachFrame());
flowScheduler.add(post_quest2RoutineEnd());
flowScheduler.add(post_questRoutineBegin());
flowScheduler.add(post_questRoutineEachFrame());
flowScheduler.add(post_questRoutineEnd());
flowScheduler.add(cheaterRoutineBegin());
flowScheduler.add(cheaterRoutineEachFrame());
flowScheduler.add(cheaterRoutineEnd());
flowScheduler.add(thank_youRoutineBegin());
flowScheduler.add(thank_youRoutineEachFrame());
flowScheduler.add(thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your participation, you may now leave the window', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your participation, you may now leave the window', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions/global_city_size_list.csv', 'path': 'conditions/global_city_size_list.csv'},
    {'name': 'conditions/global_height_list.csv', 'path': 'conditions/global_height_list.csv'},
    {'name': 'conditions/global_high_list.csv', 'path': 'conditions/global_high_list.csv'},
    {'name': 'conditions/global_low_list.csv', 'path': 'conditions/global_low_list.csv'},
    {'name': 'conditions/judgment_pairs_globalHigh.xlsx', 'path': 'conditions/judgment_pairs_globalHigh.xlsx'},
    {'name': 'conditions/judgment_pairs_globalLow.xlsx', 'path': 'conditions/judgment_pairs_globalLow.xlsx'},
    {'name': 'conditions/judgment_pairs_heightBaseline.xlsx', 'path': 'conditions/judgment_pairs_heightBaseline.xlsx'},
    {'name': 'conditions/judgment_pairs_sizeBaseline.xlsx', 'path': 'conditions/judgment_pairs_sizeBaseline.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DATA);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Student ID #"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var consent_prepClock;
var consent_p;
var key_resp_5;
var consent_pt1Clock;
var consent_1;
var continue_1;
var cont_mouse1;
var text_2;
var consent_pt2Clock;
var consent_2;
var continue_2;
var cont_mouse2;
var cont_txt2;
var consent_pt3Clock;
var consent_3;
var consent_rec;
var cont_mouse3;
var consent_button;
var do_your_bestClock;
var do_your_best_text;
var key_resp;
var emailClock;
var name_text;
var name_input;
var key_resp_4;
var conditionRows;
var condRow;
var selectedCondition;
var taskCondition;
var judgeCondition;
var introLong;
var WelcomeClock;
var welcome_text;
var wel_key_resp;
var recognitionClock;
var city_text;
var rec_square;
var no_rec_square;
var rec_text;
var no_rec_text;
var rwk_square;
var rec_with_knowledge_text;
var rec_mouse;
var city_size_instructionClock;
var city_instr_text;
var city_instr_key_resp;
var city_size_taskClock;
var text;
var A;
var B;
var choice_a_text;
var choice_b_text;
var choice_mouse;
var feedbackClock;
var feed;
var post_quest2Clock;
var textbox_2;
var key_resp_3;
var post2_text_2;
var post_questClock;
var key_resp_2;
var post_text_2;
var slider;
var cheaterClock;
var cheater_text;
var cheat_button1;
var cheat_button2;
var thank_youClock;
var saving_data;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "consent_prep"
  consent_prepClock = new util.Clock();
  consent_p = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_p',
    text: 'Following this screen you will be presented with 3 pages of a consent form. It is very important you read the text in its entirety. If after reading the form you do not wish to continue with the experiment, please exit the window (if you are in full screen hit esp, then close the window).\n\nIf you are ready to continue please press the space bar.  ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_pt1"
  consent_pt1Clock = new util.Clock();
  consent_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_1',
    text: 'Title of research study: Online Cognitive Ability Testing\nResearcher: Derek Graham, University of California, Riverside\nderekgr@ucr.edu\n\nIntroduction:\nThis is a research study about cognitive abilities, such as memory, attention, and problem-solving, assessed through various cognitive tasks. The purpose of this study is to understand how these cognitive functions relate to one another and to explore patterns in cognitive performance across different types of tasks. By examining factors such as memory retention, focus, and reasoning ability, the research aims to provide insights into how these core cognitive abilities contribute to overall mental functioning. The broader goal of this study is to enhance knowledge in the field of cognitive psychology, potentially informing future tools for assessing and supporting cognitive health.\n\nThe study researchers, Derek Graham and Dr. Gene Brewer (Faculty Advisor) from the UCR Department of Psychology, will explain this study to you. Research studies include only those people who choose to participate in the study. There are no direct benefits to your participation in this study. \n\nYou will receive 0.5 credits per 30 minutes of participation, including the time spent reviewing and completing the consent form. You are being asked to take part in this study because you are a UCR undergraduate student and at least 18 years old. Instead of participating in this research study, you may earn research credit by completing an alternative assignment provided by the Psychology Department Subject Pool or by participating in other studies listed in SONA. Please refer to the Psychology Department’s guidelines or the SONA system for more information on these options. \n\nWhile this study involves minimal risk, you may experience mild discomforts such as mental fatigue or slight frustration while completing cognitive tasks that require sustained focus. Additionally, some tasks may be challenging, which could lead to temporary frustration. These\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.0225,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_1 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_1', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, 
    pos: [0, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  cont_mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  cont_mouse1.mouseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "consent_pt2"
  consent_pt2Clock = new util.Clock();
  consent_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_2',
    text: 'risks are expected to be brief and manageable, and you may take breaks or withdraw from the study at any time if needed.\n\nYour responses will be kept confidential, and only the research team will have access to your data. Identifiable information, such as your name and email, will be collected solely to grant course credit. This information will be securely stored on encrypted servers and deleted once course credit has been awarded. Afterward, your responses will be linked only to a unique participant ID to maintain confidentiality. Once your data has been de-identified, it will no longer be possible to withdraw it, as it will no longer be linked to your personal information. \n\nAll de-identified data will be securely stored for 10 years on encrypted servers accessible only to the research team. This data will be used for analysis to investigate the relationships between different cognitive abilities, and findings may be presented in reports or publications, but no identifying information will be shared. These procedures ensure your privacy and the security of your data throughout the study. This study has been reviewed and approved by the University of California, Riverside Institutional Review Board. \n\nIf you choose to participate, here’s what you can expect: You will first review an informed consent form online, which will explain the study in more detail and confirm your understanding and agreement to participate. After consenting, you will complete a short demographic survey, which will take about 5 minutes. You can skip any questions you do not want to answer. Location: Online, in a setting of your choice with internet access.\n\nYou will complete a series of cognitive tasks designed to measure abilities like memory, attention, and problem-solving. This 1-hour session will include 4–5 tasks covering a broader range of memory, attention, and reasoning abilities. Location: Online, in one continuous session after the consent and survey. Credit: You will receive 1.0 research credit for your participation.\n\nAfter completing the cognitive tasks, you will receive a debriefing statement that explains the purpose of the study and the potential contributions of your participation to research. This will take about 5 minutes, and you can ask any questions you may have at this time.\nLocation: Online, immediately after the task session.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.0225,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_2 = new visual.Rect ({
    win: psychoJS.window, name: 'continue_2', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, 
    pos: [0, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  cont_mouse2 = new core.Mouse({
    win: psychoJS.window,
  });
  cont_mouse2.mouseClock = new util.Clock();
  cont_txt2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cont_txt2',
    text: 'Continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "consent_pt3"
  consent_pt3Clock = new util.Clock();
  consent_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_3',
    text: 'We will keep your answers confidential and will not share your personal information with anyone outside the research team. Identifiable information, such as your name, will only be used to award course credit and will be deleted once the credit is granted. Afterward, your responses will only be associated with a unique participant ID to protect your privacy.\n\nYou can skip questions you do not want to answer or stop participating at any time. Your responses will be kept confidential, and only the research team will have access to your data, which will not be linked to your personal information once de-identified. Please do not include your name or other information that could be used to identify you in your responses.\nWe will keep your answers confidential and will not share your personal information with anyone outside the research team. \nIf you decide to discontinue participation altogether, your data collected up to that point will not be retained. To ensure confidentiality, any identifiable information (such as your name and email) will be deleted once course credit is awarded, so your data will then be linked only to a unique participant ID. If you request data deletion after identifiers have been removed, we may be unable to locate your specific data, as it will be de-identified.\n\nIf you have questions, concerns, or complaints, or think the research has hurt you, talk to the research team at derekgr@ucr.edu \nIf you have questions about your rights or complaints as a research subject, please contact the IRB Chairperson at (951) 827 - 4802 during business hours, or to contact them by email at irb@ucr.edu.\n\nCONSENT\nPARTICIPATION IN RESEARCH IS VOLUNTARY.  The decision to participate, or not participate, is solely up to you. \n\nIf you wish to participate in this study, click the button to indicate consent.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.0225,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  consent_rec = new visual.Rect ({
    win: psychoJS.window, name: 'consent_rec', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, 
    pos: [0, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  cont_mouse3 = new core.Mouse({
    win: psychoJS.window,
  });
  cont_mouse3.mouseClock = new util.Clock();
  consent_button = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_button',
    text: 'I consent',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "do_your_best"
  do_your_bestClock = new util.Clock();
  do_your_best_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'do_your_best_text',
    text: 'Please give your full effort on this task! Also, it is EXTREMELY important that you do not close the browser or press the back button. If you do, you will lose your progress and be unable to complete the study. Do not look up answers to questions on google or use any other outside assistance to help you. Your answer selection should solely be based on what YOU believe to be the correct answer. This study should take approximately 1 hour.\n\nOnce you acknowledge that you have read and understand the previous message, please press the spacebar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "email"
  emailClock = new util.Clock();
  name_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'name_text',
    text: 'Please provide your first and last name, this is so we can award you credit after completion of the task. After data collection this information will be removed from the data before any findings are released. Please hit enter once you have finished.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  name_input = new visual.TextBox({
    win: psychoJS.window,
    name: 'name_input',
    text: '',
    placeholder: 'Type Name here...',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_5
  conditionRows = [
      {
          taskCondition: "conditions/global_high_list.csv",
          judgeCondition: "conditions/judgment_pairs_globalHigh.xlsx",
          introLong: "Now we will be moving onto the second part of this study. For this section of the study you will be tasked with identifying which of two presented cities has a higher population. These will be cities from the list you were just presented with. You will indicate which of the cities you believe has a higher population with a mouse click. When you are ready to begin this portion of the study please press the spacebar."
      },
      {
          taskCondition: "conditions/global_low_list.csv",
          judgeCondition: "conditions/judgment_pairs_globalLow.xlsx",
          introLong: "Now we will be moving onto the second part of this study. For this section of the study you will be tasked with identifying which of two presented cities has a higher population. These will be cities from the list you were just presented with. You will indicate which of the cities you believe has a higher population with a mouse click. When you are ready to begin this portion of the study please press the spacebar."
      },
      {
          taskCondition: "conditions/global_height_list.csv",
          judgeCondition: "conditions/judgment_pairs_heightBaseline.xlsx",
          introLong: "Now we will be moving onto the second part of this study. For this section of the study you will be tasked with identifying which of two presented cities is higher above sea level. These will be cities from the list you were just presented with. You will indicate which of the cities you believe is higher above sea level (in feet) with a mouse click. When you are ready to begin this portion of the study please press the spacebar."
      },
      {
          taskCondition: "conditions/global_city_size_list.csv",
          judgeCondition: "conditions/judgment_pairs_sizeBaseline.xlsx",
          introLong: "Now we will be moving onto the second part of this study. For this section of the study you will be tasked with identifying which of two presented cities has a higher population. These will be cities from the list you were just presented with. You will indicate which of the cities you believe has a higher population with a mouse click. When you are ready to begin this portion of the study please press the spacebar."
      }
  ];
  
  condRow = Math.floor(Math.random() * 4);
  selectedCondition = conditionRows[condRow];
  
  taskCondition = selectedCondition.taskCondition;
  judgeCondition = selectedCondition.judgeCondition;
  introLong = selectedCondition.introLong;
  
  console.log("Selected row:", condRow);
  console.log("taskCondition:", taskCondition);
  console.log("judgeCondition:", judgeCondition);
  console.log("introLong:", introLong);
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Thank you for participation in our study! To begin, we will present you with a list of cities. You will be tasked with indicating whether you recognize, recognize and have further knowledge, or do not recognize each city. If you recognize a city and know a fact about that city (this city has a NBA team, this city has a major international airport, this city has one of the tallest buildings in the world, etc.), that is considered further knowledge. Only indicate that you have further knowledge if you are 100% sure about this additional fact. To indicate your choice you will click the corresponding button with your mouse.\n\nWhen you are ready to begin please hit the space bar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  wel_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recognition"
  recognitionClock = new util.Clock();
  city_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'city_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  rec_square = new visual.Rect ({
    win: psychoJS.window, name: 'rec_square', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  no_rec_square = new visual.Rect ({
    win: psychoJS.window, name: 'no_rec_square', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [0.3, (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  rec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_text',
    text: 'Recognize',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  no_rec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_rec_text',
    text: 'Dont recognize',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  rwk_square = new visual.Rect ({
    win: psychoJS.window, name: 'rwk_square', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [0, (- 0.35)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  rec_with_knowledge_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rec_with_knowledge_text',
    text: 'Further Knowledge',
    font: 'Arial',
    units: undefined, 
    pos: [0.0, (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  rec_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  rec_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "city_size_instruction"
  city_size_instructionClock = new util.Clock();
  city_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'city_instr_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  city_instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "city_size_task"
  city_size_taskClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  A = new visual.Rect ({
    win: psychoJS.window, name: 'A', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), (- 0.2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  B = new visual.Rect ({
    win: psychoJS.window, name: 'B', 
    width: [0.5, 0.2][0], height: [0.5, 0.2][1],
    ori: 0.0, 
    pos: [0.3, (- 0.2)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  choice_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_a_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  choice_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_b_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  choice_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  choice_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feed = new visual.TextStim({
    win: psychoJS.window,
    name: 'feed',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "post_quest2"
  post_quest2Clock = new util.Clock();
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: '',
    placeholder: 'Type Here',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  post2_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'post2_text_2',
    text: 'Please list any strategies you used consistently throughout the second half of the study (for example; "I relied on recognition", "I knew one city and made every judgement based on that one city", or "I just guessed". When you are ready to move on please hit enter or return.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "post_quest"
  post_questClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  post_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'post_text_2',
    text: "What percentage of trials do you think the city you recognized was the correct response? Please indicate a number between 0 (was always wrong) and 100 (always correct). For reference, 50 percent would indicate the cue was not better than chance. Please click the slider to place your answer, you can move it if you aren't happy with the intial placement. After you have input your answer please hit enter or return.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.25)], ori: 0.0, units: psychoJS.window.units,
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], fontSize: 0.05, ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "cheater"
  cheaterClock = new util.Clock();
  cheater_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cheater_text',
    text: 'Did you cheat or do anything that was made explicitly clear was not acceptable at the beginning of the task? You will not lose credit for saying yes, however we need to know for data quality.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  cheat_button1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cheat_button1',
    text: 'I cheated',
    font: 'Arvo',
    pos: [(- 0.3), (- 0.2)],
    size: [0.5, 0.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  cheat_button1.clock = new util.Clock();
  
  cheat_button2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cheat_button2',
    text: 'I did not cheat',
    font: 'Arvo',
    pos: [0.3, (- 0.2)],
    size: [0.5, 0.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  cheat_button2.clock = new util.Clock();
  
  // Initialize components for Routine "thank_you"
  thank_youClock = new util.Clock();
  saving_data = new visual.TextStim({
    win: psychoJS.window,
    name: 'saving_data',
    text: 'Please wait while we save your data...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var consent_prepMaxDurationReached;
var _key_resp_5_allKeys;
var consent_prepMaxDuration;
var consent_prepComponents;
function consent_prepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_prep' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_prepClock.reset();
    routineTimer.reset();
    consent_prepMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('consent_prep.started', globalClock.getTime());
    consent_prepMaxDuration = null
    // keep track of which components have finished
    consent_prepComponents = [];
    consent_prepComponents.push(consent_p);
    consent_prepComponents.push(key_resp_5);
    
    for (const thisComponent of consent_prepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_prepRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_prep' ---
    // get current time
    t = consent_prepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_p* updates
    if (t >= 0.0 && consent_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_p.tStart = t;  // (not accounting for frame time here)
      consent_p.frameNStart = frameN;  // exact frame index
      
      consent_p.setAutoDraw(true);
    }
    
    
    // if consent_p is active this frame...
    if (consent_p.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_prepComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_prepRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_prep' ---
    for (const thisComponent of consent_prepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_prep.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "consent_prep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_pt1MaxDurationReached;
var gotValidClick;
var consent_pt1MaxDuration;
var consent_pt1Components;
function consent_pt1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_pt1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_pt1Clock.reset();
    routineTimer.reset();
    consent_pt1MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the cont_mouse1
    // current position of the mouse:
    cont_mouse1.x = [];
    cont_mouse1.y = [];
    cont_mouse1.leftButton = [];
    cont_mouse1.midButton = [];
    cont_mouse1.rightButton = [];
    cont_mouse1.time = [];
    cont_mouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('consent_pt1.started', globalClock.getTime());
    consent_pt1MaxDuration = null
    // keep track of which components have finished
    consent_pt1Components = [];
    consent_pt1Components.push(consent_1);
    consent_pt1Components.push(continue_1);
    consent_pt1Components.push(cont_mouse1);
    consent_pt1Components.push(text_2);
    
    for (const thisComponent of consent_pt1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function consent_pt1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_pt1' ---
    // get current time
    t = consent_pt1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_1* updates
    if (t >= 0.0 && consent_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_1.tStart = t;  // (not accounting for frame time here)
      consent_1.frameNStart = frameN;  // exact frame index
      
      consent_1.setAutoDraw(true);
    }
    
    
    // if consent_1 is active this frame...
    if (consent_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *continue_1* updates
    if (t >= 0.0 && continue_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_1.tStart = t;  // (not accounting for frame time here)
      continue_1.frameNStart = frameN;  // exact frame index
      
      continue_1.setAutoDraw(true);
    }
    
    
    // if continue_1 is active this frame...
    if (continue_1.status === PsychoJS.Status.STARTED) {
    }
    
    // *cont_mouse1* updates
    if (t >= 0.0 && cont_mouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_mouse1.tStart = t;  // (not accounting for frame time here)
      cont_mouse1.frameNStart = frameN;  // exact frame index
      
      cont_mouse1.status = PsychoJS.Status.STARTED;
      cont_mouse1.mouseClock.reset();
      prevButtonState = cont_mouse1.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if cont_mouse1 is active this frame...
    if (cont_mouse1.status === PsychoJS.Status.STARTED) {
      _mouseButtons = cont_mouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          cont_mouse1.clickableObjects = eval(continue_1)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(cont_mouse1.clickableObjects)) {
              cont_mouse1.clickableObjects = [cont_mouse1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of cont_mouse1.clickableObjects) {
              if (obj.contains(cont_mouse1)) {
                  gotValidClick = true;
                  cont_mouse1.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              cont_mouse1.clicked_name.push(null);
          }
          _mouseXYs = cont_mouse1.getPos();
          cont_mouse1.x.push(_mouseXYs[0]);
          cont_mouse1.y.push(_mouseXYs[1]);
          cont_mouse1.leftButton.push(_mouseButtons[0]);
          cont_mouse1.midButton.push(_mouseButtons[1]);
          cont_mouse1.rightButton.push(_mouseButtons[2]);
          cont_mouse1.time.push(cont_mouse1.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_pt1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_pt1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_pt1' ---
    for (const thisComponent of consent_pt1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_pt1.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('cont_mouse1.x', cont_mouse1.x);
    psychoJS.experiment.addData('cont_mouse1.y', cont_mouse1.y);
    psychoJS.experiment.addData('cont_mouse1.leftButton', cont_mouse1.leftButton);
    psychoJS.experiment.addData('cont_mouse1.midButton', cont_mouse1.midButton);
    psychoJS.experiment.addData('cont_mouse1.rightButton', cont_mouse1.rightButton);
    psychoJS.experiment.addData('cont_mouse1.time', cont_mouse1.time);
    psychoJS.experiment.addData('cont_mouse1.clicked_name', cont_mouse1.clicked_name);
    
    // the Routine "consent_pt1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_pt2MaxDurationReached;
var consent_pt2MaxDuration;
var consent_pt2Components;
function consent_pt2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_pt2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_pt2Clock.reset();
    routineTimer.reset();
    consent_pt2MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the cont_mouse2
    // current position of the mouse:
    cont_mouse2.x = [];
    cont_mouse2.y = [];
    cont_mouse2.leftButton = [];
    cont_mouse2.midButton = [];
    cont_mouse2.rightButton = [];
    cont_mouse2.time = [];
    cont_mouse2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('consent_pt2.started', globalClock.getTime());
    consent_pt2MaxDuration = null
    // keep track of which components have finished
    consent_pt2Components = [];
    consent_pt2Components.push(consent_2);
    consent_pt2Components.push(continue_2);
    consent_pt2Components.push(cont_mouse2);
    consent_pt2Components.push(cont_txt2);
    
    for (const thisComponent of consent_pt2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_pt2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_pt2' ---
    // get current time
    t = consent_pt2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_2* updates
    if (t >= 0.0 && consent_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_2.tStart = t;  // (not accounting for frame time here)
      consent_2.frameNStart = frameN;  // exact frame index
      
      consent_2.setAutoDraw(true);
    }
    
    
    // if consent_2 is active this frame...
    if (consent_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *continue_2* updates
    if (t >= 0.0 && continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_2.tStart = t;  // (not accounting for frame time here)
      continue_2.frameNStart = frameN;  // exact frame index
      
      continue_2.setAutoDraw(true);
    }
    
    
    // if continue_2 is active this frame...
    if (continue_2.status === PsychoJS.Status.STARTED) {
    }
    
    // *cont_mouse2* updates
    if (t >= 0.0 && cont_mouse2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_mouse2.tStart = t;  // (not accounting for frame time here)
      cont_mouse2.frameNStart = frameN;  // exact frame index
      
      cont_mouse2.status = PsychoJS.Status.STARTED;
      cont_mouse2.mouseClock.reset();
      prevButtonState = cont_mouse2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if cont_mouse2 is active this frame...
    if (cont_mouse2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = cont_mouse2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          cont_mouse2.clickableObjects = eval(continue_2)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(cont_mouse2.clickableObjects)) {
              cont_mouse2.clickableObjects = [cont_mouse2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of cont_mouse2.clickableObjects) {
              if (obj.contains(cont_mouse2)) {
                  gotValidClick = true;
                  cont_mouse2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              cont_mouse2.clicked_name.push(null);
          }
          _mouseXYs = cont_mouse2.getPos();
          cont_mouse2.x.push(_mouseXYs[0]);
          cont_mouse2.y.push(_mouseXYs[1]);
          cont_mouse2.leftButton.push(_mouseButtons[0]);
          cont_mouse2.midButton.push(_mouseButtons[1]);
          cont_mouse2.rightButton.push(_mouseButtons[2]);
          cont_mouse2.time.push(cont_mouse2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *cont_txt2* updates
    if (t >= 0.0 && cont_txt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_txt2.tStart = t;  // (not accounting for frame time here)
      cont_txt2.frameNStart = frameN;  // exact frame index
      
      cont_txt2.setAutoDraw(true);
    }
    
    
    // if cont_txt2 is active this frame...
    if (cont_txt2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_pt2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_pt2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_pt2' ---
    for (const thisComponent of consent_pt2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_pt2.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('cont_mouse2.x', cont_mouse2.x);
    psychoJS.experiment.addData('cont_mouse2.y', cont_mouse2.y);
    psychoJS.experiment.addData('cont_mouse2.leftButton', cont_mouse2.leftButton);
    psychoJS.experiment.addData('cont_mouse2.midButton', cont_mouse2.midButton);
    psychoJS.experiment.addData('cont_mouse2.rightButton', cont_mouse2.rightButton);
    psychoJS.experiment.addData('cont_mouse2.time', cont_mouse2.time);
    psychoJS.experiment.addData('cont_mouse2.clicked_name', cont_mouse2.clicked_name);
    
    // the Routine "consent_pt2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_pt3MaxDurationReached;
var consent_pt3MaxDuration;
var consent_pt3Components;
function consent_pt3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_pt3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consent_pt3Clock.reset();
    routineTimer.reset();
    consent_pt3MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the cont_mouse3
    // current position of the mouse:
    cont_mouse3.x = [];
    cont_mouse3.y = [];
    cont_mouse3.leftButton = [];
    cont_mouse3.midButton = [];
    cont_mouse3.rightButton = [];
    cont_mouse3.time = [];
    cont_mouse3.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('consent_pt3.started', globalClock.getTime());
    consent_pt3MaxDuration = null
    // keep track of which components have finished
    consent_pt3Components = [];
    consent_pt3Components.push(consent_3);
    consent_pt3Components.push(consent_rec);
    consent_pt3Components.push(cont_mouse3);
    consent_pt3Components.push(consent_button);
    
    for (const thisComponent of consent_pt3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent_pt3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_pt3' ---
    // get current time
    t = consent_pt3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_3* updates
    if (t >= 0.0 && consent_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_3.tStart = t;  // (not accounting for frame time here)
      consent_3.frameNStart = frameN;  // exact frame index
      
      consent_3.setAutoDraw(true);
    }
    
    
    // if consent_3 is active this frame...
    if (consent_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *consent_rec* updates
    if (t >= 0.0 && consent_rec.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_rec.tStart = t;  // (not accounting for frame time here)
      consent_rec.frameNStart = frameN;  // exact frame index
      
      consent_rec.setAutoDraw(true);
    }
    
    
    // if consent_rec is active this frame...
    if (consent_rec.status === PsychoJS.Status.STARTED) {
    }
    
    // *cont_mouse3* updates
    if (t >= 0.0 && cont_mouse3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_mouse3.tStart = t;  // (not accounting for frame time here)
      cont_mouse3.frameNStart = frameN;  // exact frame index
      
      cont_mouse3.status = PsychoJS.Status.STARTED;
      cont_mouse3.mouseClock.reset();
      prevButtonState = cont_mouse3.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if cont_mouse3 is active this frame...
    if (cont_mouse3.status === PsychoJS.Status.STARTED) {
      _mouseButtons = cont_mouse3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          cont_mouse3.clickableObjects = eval(consent_rec)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(cont_mouse3.clickableObjects)) {
              cont_mouse3.clickableObjects = [cont_mouse3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of cont_mouse3.clickableObjects) {
              if (obj.contains(cont_mouse3)) {
                  gotValidClick = true;
                  cont_mouse3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              cont_mouse3.clicked_name.push(null);
          }
          _mouseXYs = cont_mouse3.getPos();
          cont_mouse3.x.push(_mouseXYs[0]);
          cont_mouse3.y.push(_mouseXYs[1]);
          cont_mouse3.leftButton.push(_mouseButtons[0]);
          cont_mouse3.midButton.push(_mouseButtons[1]);
          cont_mouse3.rightButton.push(_mouseButtons[2]);
          cont_mouse3.time.push(cont_mouse3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *consent_button* updates
    if (t >= 0.0 && consent_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_button.tStart = t;  // (not accounting for frame time here)
      consent_button.frameNStart = frameN;  // exact frame index
      
      consent_button.setAutoDraw(true);
    }
    
    
    // if consent_button is active this frame...
    if (consent_button.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_pt3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_pt3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_pt3' ---
    for (const thisComponent of consent_pt3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_pt3.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('cont_mouse3.x', cont_mouse3.x);
    psychoJS.experiment.addData('cont_mouse3.y', cont_mouse3.y);
    psychoJS.experiment.addData('cont_mouse3.leftButton', cont_mouse3.leftButton);
    psychoJS.experiment.addData('cont_mouse3.midButton', cont_mouse3.midButton);
    psychoJS.experiment.addData('cont_mouse3.rightButton', cont_mouse3.rightButton);
    psychoJS.experiment.addData('cont_mouse3.time', cont_mouse3.time);
    psychoJS.experiment.addData('cont_mouse3.clicked_name', cont_mouse3.clicked_name);
    
    // the Routine "consent_pt3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var do_your_bestMaxDurationReached;
var _key_resp_allKeys;
var do_your_bestMaxDuration;
var do_your_bestComponents;
function do_your_bestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'do_your_best' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    do_your_bestClock.reset();
    routineTimer.reset();
    do_your_bestMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('do_your_best.started', globalClock.getTime());
    do_your_bestMaxDuration = null
    // keep track of which components have finished
    do_your_bestComponents = [];
    do_your_bestComponents.push(do_your_best_text);
    do_your_bestComponents.push(key_resp);
    
    for (const thisComponent of do_your_bestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function do_your_bestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'do_your_best' ---
    // get current time
    t = do_your_bestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *do_your_best_text* updates
    if (t >= 0.0 && do_your_best_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      do_your_best_text.tStart = t;  // (not accounting for frame time here)
      do_your_best_text.frameNStart = frameN;  // exact frame index
      
      do_your_best_text.setAutoDraw(true);
    }
    
    
    // if do_your_best_text is active this frame...
    if (do_your_best_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of do_your_bestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function do_your_bestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'do_your_best' ---
    for (const thisComponent of do_your_bestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('do_your_best.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "do_your_best" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var emailMaxDurationReached;
var _key_resp_4_allKeys;
var emailMaxDuration;
var emailComponents;
function emailRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'email' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    emailClock.reset();
    routineTimer.reset();
    emailMaxDurationReached = false;
    // update component parameters for each repeat
    name_input.setText('');
    name_input.refresh();
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('email.started', globalClock.getTime());
    emailMaxDuration = null
    // keep track of which components have finished
    emailComponents = [];
    emailComponents.push(name_text);
    emailComponents.push(name_input);
    emailComponents.push(key_resp_4);
    
    for (const thisComponent of emailComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function emailRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'email' ---
    // get current time
    t = emailClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *name_text* updates
    if (t >= 0.0 && name_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      name_text.tStart = t;  // (not accounting for frame time here)
      name_text.frameNStart = frameN;  // exact frame index
      
      name_text.setAutoDraw(true);
    }
    
    
    // if name_text is active this frame...
    if (name_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *name_input* updates
    if (t >= 0.0 && name_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      name_input.tStart = t;  // (not accounting for frame time here)
      name_input.frameNStart = frameN;  // exact frame index
      
      name_input.setAutoDraw(true);
    }
    
    
    // if name_input is active this frame...
    if (name_input.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof ['enter','return'] === 'string' ? [['enter','return']] : ['enter','return'], 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of emailComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function emailRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'email' ---
    for (const thisComponent of emailComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('email.stopped', globalClock.getTime());
    psychoJS.experiment.addData('name_input.text',name_input.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "email" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WelcomeMaxDurationReached;
var _wel_key_resp_allKeys;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    // update component parameters for each repeat
    wel_key_resp.keys = undefined;
    wel_key_resp.rt = undefined;
    _wel_key_resp_allKeys = [];
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    WelcomeMaxDuration = null
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(welcome_text);
    WelcomeComponents.push(wel_key_resp);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    
    // if welcome_text is active this frame...
    if (welcome_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *wel_key_resp* updates
    if (t >= 0.0 && wel_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wel_key_resp.tStart = t;  // (not accounting for frame time here)
      wel_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wel_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wel_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wel_key_resp.clearEvents(); });
    }
    
    // if wel_key_resp is active this frame...
    if (wel_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = wel_key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _wel_key_resp_allKeys = _wel_key_resp_allKeys.concat(theseKeys);
      if (_wel_key_resp_allKeys.length > 0) {
        wel_key_resp.keys = _wel_key_resp_allKeys[_wel_key_resp_allKeys.length - 1].name;  // just the last key pressed
        wel_key_resp.rt = _wel_key_resp_allKeys[_wel_key_resp_allKeys.length - 1].rt;
        wel_key_resp.duration = _wel_key_resp_allKeys[_wel_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(wel_key_resp.corr, level);
    }
    psychoJS.experiment.addData('wel_key_resp.keys', wel_key_resp.keys);
    if (typeof wel_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('wel_key_resp.rt', wel_key_resp.rt);
        psychoJS.experiment.addData('wel_key_resp.duration', wel_key_resp.duration);
        routineTimer.reset();
        }
    
    wel_key_resp.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var RLoop;
function RLoopLoopBegin(RLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    RLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: taskCondition,
      seed: undefined, name: 'RLoop'
    });
    psychoJS.experiment.addLoop(RLoop); // add the loop to the experiment
    currentLoop = RLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRLoop of RLoop) {
      snapshot = RLoop.getSnapshot();
      RLoopLoopScheduler.add(importConditions(snapshot));
      RLoopLoopScheduler.add(recognitionRoutineBegin(snapshot));
      RLoopLoopScheduler.add(recognitionRoutineEachFrame());
      RLoopLoopScheduler.add(recognitionRoutineEnd(snapshot));
      RLoopLoopScheduler.add(RLoopLoopEndIteration(RLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function RLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(RLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function RLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var JLoop;
function JLoopLoopBegin(JLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    JLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: judgeCondition,
      seed: undefined, name: 'JLoop'
    });
    psychoJS.experiment.addLoop(JLoop); // add the loop to the experiment
    currentLoop = JLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisJLoop of JLoop) {
      snapshot = JLoop.getSnapshot();
      JLoopLoopScheduler.add(importConditions(snapshot));
      JLoopLoopScheduler.add(city_size_taskRoutineBegin(snapshot));
      JLoopLoopScheduler.add(city_size_taskRoutineEachFrame());
      JLoopLoopScheduler.add(city_size_taskRoutineEnd(snapshot));
      JLoopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      JLoopLoopScheduler.add(feedbackRoutineEachFrame());
      JLoopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      JLoopLoopScheduler.add(JLoopLoopEndIteration(JLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function JLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(JLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function JLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var recognitionMaxDurationReached;
var recognitionMaxDuration;
var recognitionComponents;
function recognitionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recognition' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    recognitionClock.reset();
    routineTimer.reset();
    recognitionMaxDurationReached = false;
    // update component parameters for each repeat
    city_text.setText(city);
    // setup some python lists for storing info about the rec_mouse
    // current position of the mouse:
    rec_mouse.x = [];
    rec_mouse.y = [];
    rec_mouse.leftButton = [];
    rec_mouse.midButton = [];
    rec_mouse.rightButton = [];
    rec_mouse.time = [];
    rec_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    rec_mouse.mouseClock.reset();
    psychoJS.experiment.addData('recognition.started', globalClock.getTime());
    recognitionMaxDuration = null
    // keep track of which components have finished
    recognitionComponents = [];
    recognitionComponents.push(city_text);
    recognitionComponents.push(rec_square);
    recognitionComponents.push(no_rec_square);
    recognitionComponents.push(rec_text);
    recognitionComponents.push(no_rec_text);
    recognitionComponents.push(rwk_square);
    recognitionComponents.push(rec_with_knowledge_text);
    recognitionComponents.push(rec_mouse);
    
    for (const thisComponent of recognitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recognitionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recognition' ---
    // get current time
    t = recognitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *city_text* updates
    if (t >= 0.0 && city_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      city_text.tStart = t;  // (not accounting for frame time here)
      city_text.frameNStart = frameN;  // exact frame index
      
      city_text.setAutoDraw(true);
    }
    
    
    // if city_text is active this frame...
    if (city_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rec_square* updates
    if (t >= 0.0 && rec_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_square.tStart = t;  // (not accounting for frame time here)
      rec_square.frameNStart = frameN;  // exact frame index
      
      rec_square.setAutoDraw(true);
    }
    
    
    // if rec_square is active this frame...
    if (rec_square.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_rec_square* updates
    if (t >= 0.0 && no_rec_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_rec_square.tStart = t;  // (not accounting for frame time here)
      no_rec_square.frameNStart = frameN;  // exact frame index
      
      no_rec_square.setAutoDraw(true);
    }
    
    
    // if no_rec_square is active this frame...
    if (no_rec_square.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rec_text* updates
    if (t >= 0.0 && rec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_text.tStart = t;  // (not accounting for frame time here)
      rec_text.frameNStart = frameN;  // exact frame index
      
      rec_text.setAutoDraw(true);
    }
    
    
    // if rec_text is active this frame...
    if (rec_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_rec_text* updates
    if (t >= 0.0 && no_rec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_rec_text.tStart = t;  // (not accounting for frame time here)
      no_rec_text.frameNStart = frameN;  // exact frame index
      
      no_rec_text.setAutoDraw(true);
    }
    
    
    // if no_rec_text is active this frame...
    if (no_rec_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rwk_square* updates
    if (t >= 0.0 && rwk_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rwk_square.tStart = t;  // (not accounting for frame time here)
      rwk_square.frameNStart = frameN;  // exact frame index
      
      rwk_square.setAutoDraw(true);
    }
    
    
    // if rwk_square is active this frame...
    if (rwk_square.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *rec_with_knowledge_text* updates
    if (t >= 0.0 && rec_with_knowledge_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_with_knowledge_text.tStart = t;  // (not accounting for frame time here)
      rec_with_knowledge_text.frameNStart = frameN;  // exact frame index
      
      rec_with_knowledge_text.setAutoDraw(true);
    }
    
    
    // if rec_with_knowledge_text is active this frame...
    if (rec_with_knowledge_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *rec_mouse* updates
    if (t >= 0.5 && rec_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rec_mouse.tStart = t;  // (not accounting for frame time here)
      rec_mouse.frameNStart = frameN;  // exact frame index
      
      rec_mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = rec_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if rec_mouse is active this frame...
    if (rec_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = rec_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          rec_mouse.clickableObjects = eval([rec_square, no_rec_square, rwk_square])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(rec_mouse.clickableObjects)) {
              rec_mouse.clickableObjects = [rec_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of rec_mouse.clickableObjects) {
              if (obj.contains(rec_mouse)) {
                  gotValidClick = true;
                  rec_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              rec_mouse.clicked_name.push(null);
          }
          _mouseXYs = rec_mouse.getPos();
          rec_mouse.x.push(_mouseXYs[0]);
          rec_mouse.y.push(_mouseXYs[1]);
          rec_mouse.leftButton.push(_mouseButtons[0]);
          rec_mouse.midButton.push(_mouseButtons[1]);
          rec_mouse.rightButton.push(_mouseButtons[2]);
          rec_mouse.time.push(rec_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of recognitionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var recog_resp;
function recognitionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recognition' ---
    for (const thisComponent of recognitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recognition.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    // default
    recog_resp = -1;
    
    // only act if clicked_name exists and is non-empty
    if (typeof rec_mouse.clicked_name !== 'undefined' &&
        rec_mouse.clicked_name !== null &&
        rec_mouse.clicked_name.length > 0) {
    
      if (rec_mouse.clicked_name.includes('rec_square')) {
        recog_resp = 1;
      } else if (rec_mouse.clicked_name.includes('no_rec_square')) {
        recog_resp = 0;
      } else if (rec_mouse.clicked_name.includes('rwk_square')) {
        recog_resp = 2;
      }
    }
    
    // clean RT safely
    let rt_clean = (typeof rec_mouse.rt !== 'undefined' &&
                    rec_mouse.rt !== null &&
                    rec_mouse.rt.length > 0)
                   ? rec_mouse.rt[0]
                   : null;
    
    // save just the response + RT
    psychoJS.experiment.addData('recog_resp', recog_resp);
    psychoJS.experiment.addData('rt_clean', rt_clean);
    
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('rec_mouse.x', rec_mouse.x);
    psychoJS.experiment.addData('rec_mouse.y', rec_mouse.y);
    psychoJS.experiment.addData('rec_mouse.leftButton', rec_mouse.leftButton);
    psychoJS.experiment.addData('rec_mouse.midButton', rec_mouse.midButton);
    psychoJS.experiment.addData('rec_mouse.rightButton', rec_mouse.rightButton);
    psychoJS.experiment.addData('rec_mouse.time', rec_mouse.time);
    psychoJS.experiment.addData('rec_mouse.clicked_name', rec_mouse.clicked_name);
    
    // the Routine "recognition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var city_size_instructionMaxDurationReached;
var _city_instr_key_resp_allKeys;
var city_size_instructionMaxDuration;
var city_size_instructionComponents;
function city_size_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'city_size_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    city_size_instructionClock.reset();
    routineTimer.reset();
    city_size_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    city_instr_text.setText(introLong);
    city_instr_key_resp.keys = undefined;
    city_instr_key_resp.rt = undefined;
    _city_instr_key_resp_allKeys = [];
    psychoJS.experiment.addData('city_size_instruction.started', globalClock.getTime());
    city_size_instructionMaxDuration = null
    // keep track of which components have finished
    city_size_instructionComponents = [];
    city_size_instructionComponents.push(city_instr_text);
    city_size_instructionComponents.push(city_instr_key_resp);
    
    for (const thisComponent of city_size_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function city_size_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'city_size_instruction' ---
    // get current time
    t = city_size_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *city_instr_text* updates
    if (t >= 0.0 && city_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      city_instr_text.tStart = t;  // (not accounting for frame time here)
      city_instr_text.frameNStart = frameN;  // exact frame index
      
      city_instr_text.setAutoDraw(true);
    }
    
    
    // if city_instr_text is active this frame...
    if (city_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *city_instr_key_resp* updates
    if (t >= 0.0 && city_instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      city_instr_key_resp.tStart = t;  // (not accounting for frame time here)
      city_instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { city_instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { city_instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { city_instr_key_resp.clearEvents(); });
    }
    
    // if city_instr_key_resp is active this frame...
    if (city_instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = city_instr_key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _city_instr_key_resp_allKeys = _city_instr_key_resp_allKeys.concat(theseKeys);
      if (_city_instr_key_resp_allKeys.length > 0) {
        city_instr_key_resp.keys = _city_instr_key_resp_allKeys[_city_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        city_instr_key_resp.rt = _city_instr_key_resp_allKeys[_city_instr_key_resp_allKeys.length - 1].rt;
        city_instr_key_resp.duration = _city_instr_key_resp_allKeys[_city_instr_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of city_size_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function city_size_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'city_size_instruction' ---
    for (const thisComponent of city_size_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('city_size_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(city_instr_key_resp.corr, level);
    }
    psychoJS.experiment.addData('city_instr_key_resp.keys', city_instr_key_resp.keys);
    if (typeof city_instr_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('city_instr_key_resp.rt', city_instr_key_resp.rt);
        psychoJS.experiment.addData('city_instr_key_resp.duration', city_instr_key_resp.duration);
        routineTimer.reset();
        }
    
    city_instr_key_resp.stop();
    // the Routine "city_size_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var city_size_taskMaxDurationReached;
var city_size_taskMaxDuration;
var city_size_taskComponents;
function city_size_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'city_size_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    city_size_taskClock.reset();
    routineTimer.reset();
    city_size_taskMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(introShort);
    choice_a_text.setText(cityA);
    choice_b_text.setText(cityB);
    // setup some python lists for storing info about the choice_mouse
    // current position of the mouse:
    choice_mouse.x = [];
    choice_mouse.y = [];
    choice_mouse.leftButton = [];
    choice_mouse.midButton = [];
    choice_mouse.rightButton = [];
    choice_mouse.time = [];
    choice_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('city_size_task.started', globalClock.getTime());
    city_size_taskMaxDuration = null
    // keep track of which components have finished
    city_size_taskComponents = [];
    city_size_taskComponents.push(text);
    city_size_taskComponents.push(A);
    city_size_taskComponents.push(B);
    city_size_taskComponents.push(choice_a_text);
    city_size_taskComponents.push(choice_b_text);
    city_size_taskComponents.push(choice_mouse);
    
    for (const thisComponent of city_size_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function city_size_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'city_size_task' ---
    // get current time
    t = city_size_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *A* updates
    if (t >= 0.0 && A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      A.tStart = t;  // (not accounting for frame time here)
      A.frameNStart = frameN;  // exact frame index
      
      A.setAutoDraw(true);
    }
    
    
    // if A is active this frame...
    if (A.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *B* updates
    if (t >= 0.0 && B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B.tStart = t;  // (not accounting for frame time here)
      B.frameNStart = frameN;  // exact frame index
      
      B.setAutoDraw(true);
    }
    
    
    // if B is active this frame...
    if (B.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *choice_a_text* updates
    if (t >= 0.0 && choice_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_a_text.tStart = t;  // (not accounting for frame time here)
      choice_a_text.frameNStart = frameN;  // exact frame index
      
      choice_a_text.setAutoDraw(true);
    }
    
    
    // if choice_a_text is active this frame...
    if (choice_a_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *choice_b_text* updates
    if (t >= 0.0 && choice_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_b_text.tStart = t;  // (not accounting for frame time here)
      choice_b_text.frameNStart = frameN;  // exact frame index
      
      choice_b_text.setAutoDraw(true);
    }
    
    
    // if choice_b_text is active this frame...
    if (choice_b_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *choice_mouse* updates
    if (t >= 0.5 && choice_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_mouse.tStart = t;  // (not accounting for frame time here)
      choice_mouse.frameNStart = frameN;  // exact frame index
      
      choice_mouse.status = PsychoJS.Status.STARTED;
      choice_mouse.mouseClock.reset();
      prevButtonState = choice_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if choice_mouse is active this frame...
    if (choice_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = choice_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          choice_mouse.clickableObjects = eval([A, B])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(choice_mouse.clickableObjects)) {
              choice_mouse.clickableObjects = [choice_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of choice_mouse.clickableObjects) {
              if (obj.contains(choice_mouse)) {
                  gotValidClick = true;
                  choice_mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          choice_mouse.clickableObjects = eval([A, B])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(choice_mouse.clickableObjects)) {
              choice_mouse.clickableObjects = [choice_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of choice_mouse.clickableObjects) {
              if (obj.contains(choice_mouse)) {
                  gotValidClick = true;
                  choice_mouse.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = choice_mouse.getPos();
            choice_mouse.x.push(_mouseXYs[0]);
            choice_mouse.y.push(_mouseXYs[1]);
            choice_mouse.leftButton.push(_mouseButtons[0]);
            choice_mouse.midButton.push(_mouseButtons[1]);
            choice_mouse.rightButton.push(_mouseButtons[2]);
            choice_mouse.time.push(choice_mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of city_size_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var a_resp;
var b_resp;
var clicked;
var correct;
function city_size_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'city_size_task' ---
    for (const thisComponent of city_size_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('city_size_task.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    // defaults
    a_resp = -1;
    b_resp = -1;
    
    // proceed only if clicked_name exists and is non-empty
    if (typeof choice_mouse.clicked_name !== 'undefined' &&
        choice_mouse.clicked_name !== null &&
        choice_mouse.clicked_name.length > 0) {
    
      if (choice_mouse.clicked_name.includes('A')) {
        a_resp = 1;
        b_resp = 0;
      } else if (choice_mouse.clicked_name.includes('B')) {
        a_resp = 0;
        b_resp = 1;
      }
    }
    
    // clean RT safely
    let rt_clean_size = (typeof choice_mouse.rt !== 'undefined' &&
                         choice_mouse.rt !== null &&
                         choice_mouse.rt.length > 0)
                        ? choice_mouse.rt[0]
                        : null;
    
    // save just responses + RT
    psychoJS.experiment.addData('a_resp', a_resp);
    psychoJS.experiment.addData('b_resp', b_resp);
    psychoJS.experiment.addData('rt_clean_size', rt_clean_size);
    
    window.trial_counter += 1;
    
    // default
    window.acc = 0;
    
    // read clicked object safely
    let clicked = "";
    if (choice_mouse.clicked_name && choice_mouse.clicked_name.length > 0) {
        clicked = String(choice_mouse.clicked_name[0]).trim();
    }
    
    // read correct answer safely
    let correct = "";
    if (corrAns !== undefined && corrAns !== null) {
        correct = String(corrAns).trim();
    }
    
    // score
    if (clicked !== "" && clicked === correct) {
        window.acc = 1;
    }
    
    // save for rolling feedback
    window.last5_acc.push(window.acc);
    if (window.last5_acc.length > 5) {
        window.last5_acc.shift();
    }
    
    // every 3 trials
    window.show_feedback = window.allow_feedback && (window.trial_counter % 5 === 0);
    
    if (window.show_feedback) {
        window.block_accuracy = window.last5_acc.reduce((a, b) => a + b, 0) / window.last5_acc.length;
        window.feedback_text = "Your accuracy for the last 5 trials was " + Math.round(window.block_accuracy * 100) + "%";
    } else {
        window.feedback_text = "";
    }
    
    // save diagnostics
    psychoJS.experiment.addData('fb_condition', window.fb_condition);
    psychoJS.experiment.addData('show_feedback', window.show_feedback);
    psychoJS.experiment.addData('block_accuracy', window.block_accuracy);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('choice_mouse.x', choice_mouse.x);
    psychoJS.experiment.addData('choice_mouse.y', choice_mouse.y);
    psychoJS.experiment.addData('choice_mouse.leftButton', choice_mouse.leftButton);
    psychoJS.experiment.addData('choice_mouse.midButton', choice_mouse.midButton);
    psychoJS.experiment.addData('choice_mouse.rightButton', choice_mouse.rightButton);
    psychoJS.experiment.addData('choice_mouse.time', choice_mouse.time);
    psychoJS.experiment.addData('choice_mouse.clicked_name', choice_mouse.clicked_name);
    
    // the Routine "city_size_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    if (!window.show_feedback) {
        continueRoutine = false;
    }
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feed);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feed* updates
    if (t >= 0.0 && feed.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      feed.setText(feedback_text, false);
      // keep track of start time/frame for later
      feed.tStart = t;  // (not accounting for frame time here)
      feed.frameNStart = frameN;  // exact frame index
      
      feed.setAutoDraw(true);
    }
    
    
    // if feed is active this frame...
    if (feed.status === PsychoJS.Status.STARTED) {
      // update params
      feed.setText(feedback_text, false);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feed.tStop = t;  // not accounting for scr refresh
      feed.frameNStop = frameN;  // exact frame index
      // update status
      feed.status = PsychoJS.Status.FINISHED;
      feed.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var show_feedback;
function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    show_feedback = false;
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var post_quest2MaxDurationReached;
var _key_resp_3_allKeys;
var post_quest2MaxDuration;
var post_quest2Components;
function post_quest2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'post_quest2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    post_quest2Clock.reset();
    routineTimer.reset();
    post_quest2MaxDurationReached = false;
    // update component parameters for each repeat
    textbox_2.setText('');
    textbox_2.refresh();
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('post_quest2.started', globalClock.getTime());
    post_quest2MaxDuration = null
    // keep track of which components have finished
    post_quest2Components = [];
    post_quest2Components.push(textbox_2);
    post_quest2Components.push(key_resp_3);
    post_quest2Components.push(post2_text_2);
    
    for (const thisComponent of post_quest2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function post_quest2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'post_quest2' ---
    // get current time
    t = post_quest2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // if textbox_2 is active this frame...
    if (textbox_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 2.5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof ['enter','return'] === 'string' ? [['enter','return']] : ['enter','return'], 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *post2_text_2* updates
    if (t >= 0.0 && post2_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      post2_text_2.tStart = t;  // (not accounting for frame time here)
      post2_text_2.frameNStart = frameN;  // exact frame index
      
      post2_text_2.setAutoDraw(true);
    }
    
    
    // if post2_text_2 is active this frame...
    if (post2_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_quest2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_quest2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'post_quest2' ---
    for (const thisComponent of post_quest2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('post_quest2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_2.text',textbox_2.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "post_quest2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var post_questMaxDurationReached;
var _key_resp_2_allKeys;
var post_questMaxDuration;
var post_questComponents;
function post_questRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'post_quest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    post_questClock.reset();
    routineTimer.reset();
    post_questMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    slider.reset()
    psychoJS.experiment.addData('post_quest.started', globalClock.getTime());
    post_questMaxDuration = null
    // keep track of which components have finished
    post_questComponents = [];
    post_questComponents.push(key_resp_2);
    post_questComponents.push(post_text_2);
    post_questComponents.push(slider);
    
    for (const thisComponent of post_questComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function post_questRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'post_quest' ---
    // get current time
    t = post_questClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 1.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof ['space','return'] === 'string' ? [['space','return']] : ['space','return'], 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *post_text_2* updates
    if (t >= 0.0 && post_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      post_text_2.tStart = t;  // (not accounting for frame time here)
      post_text_2.frameNStart = frameN;  // exact frame index
      
      post_text_2.setAutoDraw(true);
    }
    
    
    // if post_text_2 is active this frame...
    if (post_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // if slider is active this frame...
    if (slider.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_questComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_questRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'post_quest' ---
    for (const thisComponent of post_questComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('post_quest.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "post_quest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cheaterMaxDurationReached;
var cheaterMaxDuration;
var cheaterComponents;
function cheaterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cheater' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    cheaterClock.reset();
    routineTimer.reset();
    cheaterMaxDurationReached = false;
    // update component parameters for each repeat
    // reset cheat_button1 to account for continued clicks & clear times on/off
    cheat_button1.reset()
    // reset cheat_button2 to account for continued clicks & clear times on/off
    cheat_button2.reset()
    psychoJS.experiment.addData('cheater.started', globalClock.getTime());
    cheaterMaxDuration = null
    // keep track of which components have finished
    cheaterComponents = [];
    cheaterComponents.push(cheater_text);
    cheaterComponents.push(cheat_button1);
    cheaterComponents.push(cheat_button2);
    
    for (const thisComponent of cheaterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cheaterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cheater' ---
    // get current time
    t = cheaterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cheater_text* updates
    if (t >= 0.0 && cheater_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cheater_text.tStart = t;  // (not accounting for frame time here)
      cheater_text.frameNStart = frameN;  // exact frame index
      
      cheater_text.setAutoDraw(true);
    }
    
    
    // if cheater_text is active this frame...
    if (cheater_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *cheat_button1* updates
    if (t >= 0 && cheat_button1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cheat_button1.tStart = t;  // (not accounting for frame time here)
      cheat_button1.frameNStart = frameN;  // exact frame index
      
      cheat_button1.setAutoDraw(true);
    }
    
    
    // if cheat_button1 is active this frame...
    if (cheat_button1.status === PsychoJS.Status.STARTED) {
    }
    
    if (cheat_button1.status === PsychoJS.Status.STARTED) {
      // check whether cheat_button1 has been pressed
      if (cheat_button1.isClicked) {
        if (!cheat_button1.wasClicked) {
          // store time of first click
          cheat_button1.timesOn.push(cheat_button1.clock.getTime());
          // store time clicked until
          cheat_button1.timesOff.push(cheat_button1.clock.getTime());
        } else {
          // update time clicked until;
          cheat_button1.timesOff[cheat_button1.timesOff.length - 1] = cheat_button1.clock.getTime();
        }
        if (!cheat_button1.wasClicked) {
          // end routine when cheat_button1 is clicked
          continueRoutine = false;
          
        }
        // if cheat_button1 is still clicked next frame, it is not a new click
        cheat_button1.wasClicked = true;
      } else {
        // if cheat_button1 is clicked next frame, it is a new click
        cheat_button1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cheat_button1 hasn't started / has finished
      cheat_button1.clock.reset();
      // if cheat_button1 is clicked next frame, it is a new click
      cheat_button1.wasClicked = false;
    }
    
    // *cheat_button2* updates
    if (t >= 0 && cheat_button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cheat_button2.tStart = t;  // (not accounting for frame time here)
      cheat_button2.frameNStart = frameN;  // exact frame index
      
      cheat_button2.setAutoDraw(true);
    }
    
    
    // if cheat_button2 is active this frame...
    if (cheat_button2.status === PsychoJS.Status.STARTED) {
    }
    
    if (cheat_button2.status === PsychoJS.Status.STARTED) {
      // check whether cheat_button2 has been pressed
      if (cheat_button2.isClicked) {
        if (!cheat_button2.wasClicked) {
          // store time of first click
          cheat_button2.timesOn.push(cheat_button2.clock.getTime());
          // store time clicked until
          cheat_button2.timesOff.push(cheat_button2.clock.getTime());
        } else {
          // update time clicked until;
          cheat_button2.timesOff[cheat_button2.timesOff.length - 1] = cheat_button2.clock.getTime();
        }
        if (!cheat_button2.wasClicked) {
          // end routine when cheat_button2 is clicked
          continueRoutine = false;
          
        }
        // if cheat_button2 is still clicked next frame, it is not a new click
        cheat_button2.wasClicked = true;
      } else {
        // if cheat_button2 is clicked next frame, it is a new click
        cheat_button2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cheat_button2 hasn't started / has finished
      cheat_button2.clock.reset();
      // if cheat_button2 is clicked next frame, it is a new click
      cheat_button2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cheaterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cheaterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cheater' ---
    for (const thisComponent of cheaterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('cheater.stopped', globalClock.getTime());
    psychoJS.experiment.addData('cheat_button1.numClicks', cheat_button1.numClicks);
    psychoJS.experiment.addData('cheat_button1.timesOn', cheat_button1.timesOn);
    psychoJS.experiment.addData('cheat_button1.timesOff', cheat_button1.timesOff);
    psychoJS.experiment.addData('cheat_button2.numClicks', cheat_button2.numClicks);
    psychoJS.experiment.addData('cheat_button2.timesOn', cheat_button2.timesOn);
    psychoJS.experiment.addData('cheat_button2.timesOff', cheat_button2.timesOff);
    // the Routine "cheater" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thank_youMaxDurationReached;
var thank_youMaxDuration;
var thank_youComponents;
function thank_youRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thank_you' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thank_youClock.reset();
    routineTimer.reset();
    thank_youMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    //Generate filename for results
    let filename = psychoJS.experiment._experimentName + '' + psychoJS._experiment._datetime + '.csv';
    
    //Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    //Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '/',
        },
        body: JSON.stringify({
            experimentID: 'tIpbE4qOUAx6',
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('thank_you.started', globalClock.getTime());
    thank_youMaxDuration = null
    // keep track of which components have finished
    thank_youComponents = [];
    thank_youComponents.push(saving_data);
    
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thank_youRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank_you' ---
    // get current time
    t = thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *saving_data* updates
    if (t >= 0.0 && saving_data.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      saving_data.tStart = t;  // (not accounting for frame time here)
      saving_data.frameNStart = frameN;  // exact frame index
      
      saving_data.setAutoDraw(true);
    }
    
    
    // if saving_data is active this frame...
    if (saving_data.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thank_youRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank_you' ---
    for (const thisComponent of thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thank_you.stopped', globalClock.getTime());
    // the Routine "thank_you" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
