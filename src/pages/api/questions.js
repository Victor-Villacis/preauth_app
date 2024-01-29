const data = {
  10: {
    title: 'Diagnostic facet joint injection',
    questions: [
      {
        question_number: 1,
        question_description: 'Choose one: <a href="#6"><sup>(6)</sup></a>',
        options: {
          A: 'Initial diagnostic medial branch block <a href="#7"><sup>(7)</sup></a>',
          B: 'Second diagnostic medial branch block <a href="#7"><sup>(7)</sup></a>',
          C: 'Initial diagnostic intra-articular zygapophysial joint injection <a href="#8"><sup>(8)</sup></a>',
          D: 'Second diagnostic intra-articular zygapophysial joint injection <a href="#8"><sup>(8)</sup></a>',
          E: 'Other clinical information (add comment)',
        },
        actions: [
          'If option A selected, then go to question 2',
          'If option B selected, then go to question 7',
          'If option C selected, then go to question 14',
          'If option D selected, then go to question 18',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 2,
        question_description: 'Choose all that apply:',
        options: {
          A: 'Back or neck pain ≥ 3 months suggestive of facet joint origin <a href="#9"><sup>(9)</sup></a>',
          B: 'No acute neurologic deficits',
          C: 'Imaging nondiagnostic for etiology of pain <a href="#10"><sup>(10)</sup></a>',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If the number of options selected is 3 and option D not selected, then go to question 3',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 3,
        question_description:
          'Treatment within the last year, Choose all that apply: <a href="#11"><sup>(11)</sup></a>',
        options: {
          A: 'NSAIDs or acetaminophen ≥ 3 weeks <a href="#12"><sup>(12)</sup></a>',
          B: 'Activity modification ≥ 4 weeks <a href="#13"><sup>(13)</sup></a>',
          C: 'PT or home exercise ≥ 4 weeks <a href="#14"><sup>(14)</sup></a>',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If the number of options selected is 3 and option D not selected, then go to question 4',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 4,
        question_description: 'Continued pain after treatment',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 5',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 5,
        question_description:
          'Neuroablation planned <a href="#15"><sup>(15)</sup></a>',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 6',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 6,
        question_description: 'Choose one:',
        options: {
          A: 'Cervical spine injection requested',
          B: 'Thoracic spine injection requested',
          C: 'Lumbar spine injection requested',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If option A or C selected, then the rule is satisfied; you may stop here  (Outpatient)',
          'If option B selected, then the rule is satisfied; you may stop here  Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#17"><sup>(17)</sup></a>',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 7,
        question_description:
          'Choose all that apply: <a href="#18"><sup>(18)</sup></a>',
        options: {
          A: 'Documented pain reduction ≥ 75% after initial diagnostic injection and ≥ 2 weeks since initial injection',
          B: 'Documented pain reduction < 75% after initial diagnostic injection and ≥ 2 weeks since initial injection',
          C: 'Documented pain reduction < 75% after initial diagnostic injection and ≥ 75% after second diagnostic injection and ≥ 2 weeks since prior injection',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If option A selected, then go to question 8',
          'If option B selected, then go to question 10',
          'If option C selected, then go to question 12',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 8,
        question_description:
          'Second diagnostic injection planned at same level as initial injection',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 9',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 9,
        question_description: 'Choose one:',
        options: {
          A: 'Cervical spine injection requested',
          B: 'Thoracic spine injection requested',
          C: 'Lumbar spine injection requested',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If option A or C selected, then the rule is satisfied; you may stop here  (Outpatient)',
          'If option B selected, then the rule is satisfied; you may stop here  Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#17"><sup>(17)</sup></a>',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 10,
        question_description:
          'Second diagnostic injection planned for different or additional level than initial injection',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 11',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 11,
        question_description: 'Choose one:',
        options: {
          A: 'Cervical spine injection requested',
          B: 'Thoracic spine injection requested',
          C: 'Lumbar spine injection requested',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If option A or C selected, then the rule is satisfied; you may stop here  (Outpatient)',
          'If option B selected, then the rule is satisfied; you may stop here  Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#17"><sup>(17)</sup></a>',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 12,
        question_description:
          'Diagnostic injection planned at same level as second injection that achieved pain reduction ≥ 75%',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 13',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 13,
        question_description: 'Choose one:',
        options: {
          A: 'Cervical spine injection requested',
          B: 'Thoracic spine injection requested',
          C: 'Lumbar spine injection requested',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If option A or C selected, then the rule is satisfied; you may stop here  (Outpatient)',
          'If option B selected, then the rule is satisfied; you may stop here  Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#17"><sup>(17)</sup></a>',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 14,
        question_description: 'Choose all that apply:',
        options: {
          A: 'Back or neck pain ≥ 3 months suggestive of facet joint origin <a href="#9"><sup>(9)</sup></a>',
          B: 'No acute neurologic deficits <a href="#19"><sup>(19)</sup></a>',
          C: 'Imaging nondiagnostic for etiology of pain <a href="#10"><sup>(10)</sup></a>',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If the number of options selected is 3 and option D not selected, then go to question 15',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 15,
        question_description:
          'Treatment within the last year, Choose all that apply: <a href="#11"><sup>(11)</sup></a>',
        options: {
          A: 'NSAIDs or acetaminophen ≥ 3 weeks <a href="#12"><sup>(12)</sup></a>',
          B: 'Activity modification ≥ 4 weeks <a href="#13"><sup>(13)</sup></a>',
          C: 'PT or home exercise ≥ 4 weeks <a href="#14"><sup>(14)</sup></a>',
          D: 'Other clinical information (add comment)',
        },
        actions: [
          'If the number of options selected is 3 and option D not selected, then go to question 16',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 16,
        question_description: 'Continued pain after treatment',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 17',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 17,
        question_description:
          'Medial branch block feasible <a href="#20"><sup>(20)</sup></a>',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then the rule is satisfied; you may stop here  Ltd 2nd (Outpatient) <sup>(16,21)</sup>',
          'If option No selected, then go to question 11',
        ],
      },
      {
        question_number: 18,
        question_description:
          'Documented pain reduction ≥ 75% after initial diagnostic injection and ≥ 2 weeks since initial injection <a href="#22"><sup>(22)</sup></a>',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 19',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 19,
        question_description:
          'Second diagnostic injection planned at same level as initial injection',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then go to question 20',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 20,
        question_description:
          'Medial branch block feasible <a href="#20"><sup>(20)</sup></a>',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then the rule is satisfied; you may stop here Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#21"><sup>(21)</sup></a>',
          'If option No selected, then go to question 11',
        ],
      },
    ],
  },
  20: {
    title: 'Therapeutic facet joint injection',
    questions: [
      {
        question_number: 1,
        question_description: 'Choose one: <a href="#23"><sup>(23)</sup></a>',
        options: {
          A: 'Initial therapeutic medial branch block',
          B: 'Second or third therapeutic medial branch block within 12 months of initial therapeutic medial branch block',
          C: 'Initial therapeutic intra-articular zygapophysial joint injection',
          D: 'Second or third therapeutic intra-articular zygapophysial joint injection within 12 months of initial therapeutic intra-articular zygapophysial joint injection',
          E: 'Other clinical information (add comment)',
        },
        actions: [
          'If option B or D selected, then the rule is satisfied; you may stop here Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#24"><sup>(24)</sup></a>',
          'If option A selected, then go to question 2',
          'If option C selected, then go to question 3',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 2,
        question_description:
          'Facet joint pain confirmed following 2 diagnostic facet joint injections',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then the rule is satisfied; you may stop here Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#24"><sup>(24)</sup></a>',
          'No other options lead to the requested service',
        ],
      },
      {
        question_number: 3,
        question_description:
          'Facet joint pain confirmed following 2 diagnostic facet joint injections',
        options: {
          A: 'Yes',
          B: 'No',
        },
        actions: [
          'If option Yes selected, then the rule is satisfied; you may stop here Ltd 2nd (Outpatient) <a href="#16"><sup>(16)</sup></a><a href="#24"><sup>(24)</sup></a>',
          'No other options lead to the requested service',
        ],
      },
    ],
  },
};

export default function handler(req, res) {
  res.status(200).json(data);
}
