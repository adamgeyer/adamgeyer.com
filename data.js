const CARDS = [
  {q:"What are the two primary functions of financial accounting?",a:"1. Record or measure the company's activity\n2. Share/communicate that information to decision makers",cat:"Ch.1"},
  {q:"What is the difference between accrual and cash basis accounting?",a:"Accrual: records revenues when earned and expenses when incurred (GAAP required).\nCash basis: records only when cash is received or paid — NOT GAAP.",cat:"Ch.3"},
  {q:"What are the four types of adjusting entries?",a:"1. Prepaid expenses (deferred expenses)\n2. Unearned revenues (deferred revenues)\n3. Accrued expenses\n4. Accrued revenues",cat:"Ch.3"},
  {q:"What are temporary accounts and why are they closed?",a:"Revenue, Expense, and Dividend accounts. They track activity for one year only. Closed at year-end by zeroing balances into Retained Earnings.",cat:"Ch.3"},
  {q:"What is AFUA and what type of account is it?",a:"Allowance for Uncollectible Accounts — a CONTRA ASSET with a credit normal balance. It reduces Accounts Receivable on the balance sheet. It is NOT a liability.",cat:"Ch.5"},
  {q:"What is the difference between a sales return and a sales allowance?",a:"Sales Return: customer physically returns the goods.\nSales Allowance: customer keeps the goods but receives a partial refund/credit for defects.",cat:"Ch.5"},
  {q:"What does '2/10, n/30' mean?",a:"2% discount if the invoice is paid within 10 days; full amount due within 30 days if discount is not taken.",cat:"Ch.5"},
  {q:"Under the allowance method, what is the entry to write off a bad debt?",a:"Debit: Allowance for Uncollectible Accounts\nCredit: Accounts Receivable\n\nNo bad debt expense is recorded at write-off — it was already recorded at year-end estimation.",cat:"Ch.5"},
  {q:"What is the difference between the % of receivables and aging methods?",a:"% of receivables: one flat rate applied to total AR balance.\nAging: different rates by how old each receivable is (older = higher %). Aging is more accurate because older accounts are less likely to be collected.",cat:"Ch.5"},
  {q:"Under FIFO, which units are assumed sold first?",a:"The oldest units — beginning inventory is treated as the first purchase, then earliest buys. Common mistake: students forget to include beginning inventory as the first units sold.",cat:"Ch.6"},
  {q:"What is the difference between perpetual and periodic inventory systems?",a:"Perpetual: continuously updates inventory with every purchase and sale. Most common in practice.\nPeriodic: only updates at period-end based on physical count.",cat:"Ch.6"},
  {q:"What is Lower of Cost and Net Realizable Value (LCNRV)?",a:"Inventory must be reported at whichever is lower: original cost OR net realizable value (expected selling price minus estimated costs to complete and sell). Write down if NRV < cost.",cat:"Ch.6"},
  {q:"What is FOB Shipping Point vs. FOB Destination?",a:"FOB Shipping Point: title passes when seller ships → buyer owns it in transit, buyer pays freight.\nFOB Destination: title passes when goods arrive at buyer → seller owns it in transit, seller pays freight.",cat:"Ch.6"},
  {q:"How is straight-line depreciation calculated?",a:"(Cost − Residual Value) ÷ Useful Life = Annual Depreciation\n\nKey: Land is NEVER depreciated. Depreciation is cost allocation, not a valuation decrease.",cat:"Ch.7"},
  {q:"What is the journal entry to record depreciation?",a:"Debit: Depreciation Expense\nCredit: Accumulated Depreciation\n\nAccumulated Depreciation is a contra asset — it reduces the asset's book value on the balance sheet.",cat:"Ch.7"},
  {q:"How do you determine gain vs. loss on asset disposal?",a:"Book Value = Cost − Accumulated Depreciation\nProceeds > Book Value → GAIN\nProceeds < Book Value → LOSS\n\nCritical: always update depreciation to the disposal date before recording the sale.",cat:"Ch.7"},
  {q:"What costs are included when recording land?",a:"Purchase price + commissions + back taxes + clearing/leveling/grading costs.\nMINUS cash received from selling salvaged materials.",cat:"Ch.7"},
  {q:"When do you capitalize vs. expense a cost?",a:"Capitalize (record as asset): benefits future periods — e.g., adding a new engine, structural remodel.\nExpense immediately: only benefits current period — e.g., routine repairs, tune-ups.",cat:"Ch.7"},
  {q:"What is goodwill and when is it recorded?",a:"Goodwill = purchase price paid in excess of the fair value of identifiable net assets acquired.\nOnly recorded when one company acquires another — NEVER for internally generated goodwill.",cat:"Ch.7"},
  {q:"What are the three sections of the Statement of Cash Flows?",a:"1. Operating: cash transactions from revenues and expenses\n2. Investing: purchase/sale of long-term assets and investment securities\n3. Financing: borrowing/repaying debt, issuing stock, paying dividends",cat:"Ch.4"},
  {q:"What are the five components of internal control?",a:"1. Control environment\n2. Risk assessment\n3. Control activities (preventative + detective)\n4. Monitoring\n5. Information and communication",cat:"Ch.4"},
  {q:"What is a bank reconciliation?",a:"A process that matches the cash balance per bank statement to the cash balance per company books.\nDifferences arise from timing (outstanding deposits/checks) or items only one party has recorded (fees, interest, NSF checks).",cat:"Ch.4"},
  {q:"What is an NSF check and how is it recorded?",a:"Non-Sufficient Funds — a customer's check bounced. The company must reverse the deposit:\nDebit: Accounts Receivable\nCredit: Cash\n\nThe customer still owes the money, creating a receivable.",cat:"Ch.4"},
  {q:"What is the Sarbanes-Oxley Act?",a:"2002 law (SOX) requiring companies that file with the SEC to document and assess internal controls. Section 404 requires both management and auditors to assess internal control effectiveness annually.",cat:"Ch.4"},
  {q:"What is deferred revenue and what type of account is it?",a:"Cash received in advance for goods/services not yet provided. It is a LIABILITY — not revenue — until the performance obligation is fulfilled.",cat:"Ch.8"},
  {q:"What is the current portion of long-term debt?",a:"The portion of long-term debt that will be paid within one year from the balance sheet date. It is reclassified from long-term to current liabilities.",cat:"Ch.8"},
  {q:"How are current vs. long-term liabilities classified?",a:"Current: due within one year (or the operating cycle, whichever is longer).\nLong-term: due in more than one year.",cat:"Ch.8"},
  {q:"How do you calculate interest on a note?",a:"Interest = Face Value × Annual Interest Rate × (Fraction of Year)\n\nKey mistake: count all months including the first. September to December = 4 months, not 3.",cat:"Ch.8"},
  {q:"What is the acid-test ratio and how does it differ from the current ratio?",a:"Acid-Test = (Cash + Current Investments + Accounts Receivable) ÷ Current Liabilities\n\nExcludes inventory and prepaid assets — more conservative than current ratio.",cat:"Ch.8"},
  {q:"What is the debt to equity ratio?",a:"Total Liabilities ÷ Stockholders' Equity\n\nMeasures financial leverage/risk. Higher ratio = more debt relative to equity = higher bankruptcy risk.",cat:"Ch.9"},
];

const QUIZ = [
  {q:"A company earns $5,000 of service revenue but has not yet collected cash. Under accrual accounting, when is revenue recorded?",opts:["When cash is collected","When the service is provided","At year-end only","When the invoice is mailed"],ans:1,exp:"Accrual accounting records revenue when goods/services are provided to the customer, regardless of when cash is received.",cat:"Ch.3"},
  {q:"Which of the following is a TEMPORARY account?",opts:["Accounts Receivable","Retained Earnings","Dividends","Prepaid Insurance"],ans:2,exp:"Temporary accounts — Revenue, Expense, and Dividends — are closed to Retained Earnings at year-end. Assets and equity accounts are permanent.",cat:"Ch.3"},
  {q:"On May 1, a company pays $12,000 for one year of insurance. How much Prepaid Insurance remains on December 31?",opts:["$4,000","$2,000","$8,000","$12,000"],ans:0,exp:"May through August = 8 months used. 4 months remain (Jan–Apr of next year). $12,000 × (4/12) = $4,000.",cat:"Ch.3"},
  {q:"Purdy Company purchases equipment for $96,000 on January 1, 2025, with an 8-year useful life. What is the January 31 adjusting entry?",opts:["Debit Depreciation Expense $1,000","Credit Accumulated Depreciation $12,000","Debit Equipment $1,000","Credit Cash $1,000"],ans:0,exp:"Annual depreciation = $96,000 ÷ 8 = $12,000. Monthly = $12,000 ÷ 12 = $1,000. Entry: Debit Depreciation Expense $1,000 / Credit Accumulated Depreciation $1,000.",cat:"Ch.3"},
  {q:"Writing off a specific customer's account as uncollectible under the allowance method:",opts:["Increases total assets","Reduces net income","Has no effect on total assets","Increases bad debt expense"],ans:2,exp:"Write-off reduces AR and reduces AFUA by the same amount — no net change in total assets and no impact on the income statement. Bad debt was already expensed when the allowance was established.",cat:"Ch.5"},
  {q:"Allowance for Uncollectible Accounts is BEST described as:",opts:["A liability because it has a credit balance","A contra asset that reduces net AR on the balance sheet","A revenue contra account","A long-term asset"],ans:1,exp:"AFUA is a contra asset — credit normal balance, offsets Accounts Receivable. It is NOT a liability even though both have credit normal balances.",cat:"Ch.5"},
  {q:"A company has net credit sales of $500,000 and average AR of $50,000. What is the average collection period?",opts:["10 days","36.5 days","50 days","73 days"],ans:1,exp:"Receivables turnover = $500,000 ÷ $50,000 = 10 times. Average collection period = 365 ÷ 10 = 36.5 days.",cat:"Ch.5"},
  {q:"Under FIFO, if beginning inventory is 100 units @ $5 and a purchase of 200 units @ $7 is made, what is COGS for 150 units sold?",opts:["$750","$850","$1,050","$800"],ans:1,exp:"FIFO sells oldest first: 100 units × $5 = $500 + 50 units × $7 = $350. Total COGS = $850.",cat:"Ch.6"},
  {q:"The inventory turnover ratio should use which inventory balance?",opts:["Ending inventory","Beginning inventory","Average inventory","Net inventory"],ans:2,exp:"Use average inventory (beginning + ending ÷ 2) because COGS is generated over the period. Don't use only ending balance.",cat:"Ch.6"},
  {q:"An understatement of ending inventory leads to:",opts:["Understated COGS","Overstated net income","Overstated COGS","Overstated assets"],ans:2,exp:"COGS = Beg Inv + Purchases − Ending Inv. If ending inventory is understated, COGS is overstated, which understates net income and assets.",cat:"Ch.6"},
  {q:"Depreciation in accounting is best described as:",opts:["A reduction in the market value of an asset","Allocation of asset cost to expense over time","A cash outflow each period","A write-off of a worthless asset"],ans:1,exp:"Accounting depreciation is a cost allocation process — not a valuation process. The market value of the asset is irrelevant to depreciation.",cat:"Ch.7"},
  {q:"Which of the following is NOT depreciated?",opts:["Buildings","Equipment","Land","Land improvements"],ans:2,exp:"Land has an indefinite useful life — it is never depreciated. Land improvements (parking lots, fencing, landscaping) ARE depreciated because they have limited useful lives.",cat:"Ch.7"},
  {q:"R&D costs are reported as:",opts:["Intangible assets on the balance sheet","Expenses on the income statement","Long-term investments","Deferred charges"],ans:1,exp:"R&D costs are expensed as incurred because it's too difficult to determine how much (if any) benefit future periods.",cat:"Ch.7"},
  {q:"A company sells equipment for $15,000. Original cost $40,000; accumulated depreciation $28,000. What is recorded?",opts:["Loss of $3,000","Gain of $3,000","Gain of $15,000","Loss of $25,000"],ans:1,exp:"Book value = $40,000 − $28,000 = $12,000. Proceeds ($15,000) > book value ($12,000) → Gain of $3,000.",cat:"Ch.7"},
  {q:"An NSF check received from a customer affects the company's books as:",opts:["Debit Cash, Credit AR","Debit AR, Credit Cash","Debit Bad Debt Expense, Credit Cash","No entry needed"],ans:1,exp:"Reverse the original deposit: Debit AR (customer still owes money) and Credit Cash (remove the deposit that bounced).",cat:"Ch.4"},
  {q:"Which item appears on the BANK side of a bank reconciliation?",opts:["NSF check","Bank service fee","Deposit outstanding","Interest earned"],ans:2,exp:"Outstanding deposits and outstanding checks appear on the bank side. NSF checks, bank fees, and interest earned appear on the company's side.",cat:"Ch.4"},
  {q:"Deferred revenue is classified as:",opts:["Revenue because cash was received","An asset","A liability until goods/services are provided","Stockholders' equity"],ans:2,exp:"Deferred revenue is a liability — the company owes goods/services to the customer. It converts to revenue only when earned.",cat:"Ch.8"},
  {q:"A company borrows $50,000 on September 1 at 6% annual interest. Interest expense recorded on December 31 is:",opts:["$750","$1,000","$3,000","$1,500"],ans:1,exp:"September, October, November, December = 4 months (count September!). $50,000 × 6% × (4/12) = $1,000.",cat:"Ch.8"},
  {q:"The acid-test ratio excludes which current assets?",opts:["Cash and investments","Accounts receivable","Inventory and prepaid assets","Notes receivable"],ans:2,exp:"Acid-test (quick ratio) uses only Cash + Current Investments + AR. It excludes inventory and prepaid assets because they are less liquid.",cat:"Ch.8"},
  {q:"Which activity is classified as INVESTING on the Statement of Cash Flows?",opts:["Paying employee salaries","Issuing shares for cash","Purchasing equipment with cash","Paying dividends"],ans:2,exp:"Investing activities involve purchase or sale of long-term assets. Issuing stock and paying dividends = financing; salaries = operating.",cat:"Ch.4"},
];

const JE_SCENARIOS = [
  {
    s:"A company sells $3,000 of merchandise on account. The cost of the merchandise is $1,800. Record the sale under the perpetual inventory system.",
    a:"Entry 1 — Record the sale:\n  Dr. Accounts Receivable   $3,000\n      Cr. Sales Revenue              $3,000\n\nEntry 2 — Record cost of goods sold:\n  Dr. Cost of Goods Sold    $1,800\n      Cr. Inventory                  $1,800"
  },
  {
    s:"A customer's $500 check is returned NSF. The company had deposited it last week and increased Cash.",
    a:"Dr. Accounts Receivable   $500\n    Cr. Cash                       $500\n\n(Reverse the deposit; customer still owes the money)"
  },
  {
    s:"On December 31, the company estimates $12,000 of AR will be uncollectible. The Allowance for Uncollectible Accounts currently has a $2,000 credit balance.",
    a:"Adjustment needed = $12,000 − $2,000 existing balance = $10,000\n\nDr. Bad Debt Expense          $10,000\n    Cr. Allowance for Uncollectible Accounts   $10,000"
  },
  {
    s:"Write off a specific customer's account of $800 as uncollectible (allowance method).",
    a:"Dr. Allowance for Uncollectible Accounts   $800\n    Cr. Accounts Receivable                        $800\n\nNote: NO Bad Debt Expense recorded here — it was already recorded when the allowance was estimated."
  },
  {
    s:"A company borrows $60,000 on a 6-month note payable at 8% annual interest. Record the note on the date of borrowing.",
    a:"Dr. Cash             $60,000\n    Cr. Notes Payable        $60,000"
  },
  {
    s:"Record 3 months of accrued interest on the $60,000 note at 8% annual interest (as of December 31).",
    a:"Interest = $60,000 × 8% × (3/12) = $1,200\n\nDr. Interest Expense   $1,200\n    Cr. Interest Payable       $1,200"
  },
  {
    s:"Equipment is purchased for $50,000 cash on April 1. Useful life: 5 years; residual value: $5,000 (straight-line). Record depreciation for the year ended December 31.",
    a:"Annual depreciation = ($50,000 − $5,000) ÷ 5 = $9,000\n9 months (Apr–Dec): $9,000 × (9/12) = $6,750\n\nDr. Depreciation Expense       $6,750\n    Cr. Accumulated Depreciation       $6,750"
  },
  {
    s:"A company sells equipment for $15,000 cash. Original cost was $40,000; accumulated depreciation is $28,000.",
    a:"Book value = $40,000 − $28,000 = $12,000\nProceeds ($15,000) > Book value ($12,000) → Gain of $3,000\n\nDr. Cash                        $15,000\nDr. Accumulated Depreciation    $28,000\n    Cr. Equipment                      $40,000\n    Cr. Gain on Sale of Equipment       $3,000"
  },
  {
    s:"On October 1, a company receives $9,600 cash in advance for a one-year service contract. Record the receipt.",
    a:"Dr. Cash             $9,600\n    Cr. Deferred Revenue     $9,600\n\n(Liability — service not yet provided)"
  },
  {
    s:"Record the December 31 adjusting entry for the service contract above (3 months of service have been provided).",
    a:"Earned = $9,600 × (3/12) = $2,400\n\nDr. Deferred Revenue   $2,400\n    Cr. Service Revenue        $2,400"
  },
  {
    s:"Record closing entries: Sales Revenue $155,000; Salaries Expense $32,000; Supplies Expense $8,000; Dividends $3,500.",
    a:"Step 1 — Close revenues:\n  Dr. Sales Revenue         $155,000\n      Cr. Income Summary             $155,000\n\nStep 2 — Close expenses:\n  Dr. Income Summary         $40,000\n      Cr. Salaries Expense          $32,000\n      Cr. Supplies Expense           $8,000\n\nStep 3 — Close Income Summary:\n  Dr. Income Summary        $115,000\n      Cr. Retained Earnings         $115,000\n\nStep 4 — Close Dividends:\n  Dr. Retained Earnings       $3,500\n      Cr. Dividends                  $3,500"
  },
  {
    s:"A company receives $200,000 in exchange for issuing common stock. What is the effect on the accounting equation?",
    a:"Assets increase (Cash +$200,000) and Equity increases (Common Stock +$200,000).\n\nEntry:\nDr. Cash              $200,000\n    Cr. Common Stock          $200,000\n\nThe accounting equation remains balanced: Assets = Liabilities + Equity"
  },
];
