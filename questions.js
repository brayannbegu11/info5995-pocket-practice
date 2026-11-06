const EXAMS = [
  {
    "id": "mock-1",
    "kind": "mock",
    "title": "Mock Paper 1",
    "description": "Mixed high-priority topics",
    "questions": [
      {
        "id": "m1-1",
        "prompt": "A portal adds public access while keeping its application code unchanged. Which change most directly requires revisiting its threat model?",
        "options": [
          "More network paths can now reach the existing interfaces.",
          "The organisation has replaced its access roles with public permissions.",
          "The application now stores a different set of student records.",
          "The database now uses a different algorithm for record encryption."
        ],
        "answer": 0,
        "week": 1,
        "topic": "Threat modelling",
        "priority": "High",
        "explanation": "新增可觸及的網路路徑會改變攻擊面，即使程式碼沒改也要重看威脅模型。題目沒有說資料、角色或加密演算法已變動，不能自行加入這些假設。",
        "explanationEn": "Additional reachable network paths can change the attack surface even when the code stays the same. The scenario does not say that records, roles or encryption algorithms have changed; those would be unsupported assumptions.",
        "source": "Custom practice · Week 1 · Threat modelling. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-2",
        "prompt": "An AI report names a vulnerable function that does not exist in the repository. What is the best next step?",
        "options": [
          "Verify the reported claim against real code and seek controlled, reproducible evidence.",
          "Rate the finding by the confidence stated in the generated report.",
          "Forward the report as confirmed and request evidence from the vendor.",
          "Patch the closest matching function using the suggested code changes."
        ],
        "answer": 0,
        "week": 2,
        "topic": "AI evidence",
        "priority": "High",
        "explanation": "AI 報告需要以真實程式碼及受控測試驗證。信心分數不是證據；找相似函式直接修補或先宣稱已確認，都跳過了驗證。",
        "explanationEn": "AI claims need verification against the actual code and reproducible evidence from controlled testing. Confidence scores are not proof. Patching a vaguely similar function or publishing the claim as confirmed skips that verification.",
        "source": "Custom practice · Week 2 · AI evidence. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-3",
        "prompt": "A validly formatted deep link pre-fills a bank transfer. Which check is still needed before the app completes the transfer?",
        "options": [
          "Validate the URL syntax and trust the pre-filled destination.",
          "Check the transport encryption and reuse the caller's authority.",
          "Check the app signature and trust the external request.",
          "Validate the input and authorise the requested transfer."
        ],
        "answer": 3,
        "week": 3,
        "topic": "Android deep links",
        "priority": "High",
        "explanation": "正確 URL 格式不等於可信來源，也不代表使用者獲准轉帳。外部輸入要驗證，敏感操作還要重新檢查授權；簽章或加密都不能取代這些檢查。",
        "explanationEn": "A correctly formatted URL is neither proof of a trusted source nor permission to transfer funds. Validate the external input and check authorisation for the sensitive action. App signatures and encrypted transport do not replace these checks.",
        "source": "Custom practice · Week 3 · Android deep links. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-4",
        "prompt": "Alice and Bob run unauthenticated Diffie–Hellman over an attacker-controlled network. What remains possible?",
        "options": [
          "The attacker substitutes public values and establishes separate keys.",
          "The attacker decrypts recorded sessions merely by knowing the algorithm.",
          "The attacker recovers the shared secret by copying the certificate.",
          "The attacker calculates both private values from any public exchange."
        ],
        "answer": 0,
        "week": 4,
        "topic": "Unauthenticated key exchange",
        "priority": "High",
        "explanation": "未經身分驗證的 DH 可能被中間人替換公開值，讓雙方分別與攻擊者建立金鑰。這不需要直接破解離散對數，也不是單靠知道演算法就能解密。",
        "explanationEn": "Without authentication, an active attacker can substitute Diffie–Hellman public values and establish a separate key with each party. This does not require solving the discrete logarithm problem or decrypting traffic simply by knowing the algorithm.",
        "source": "Custom practice · Week 4 · Unauthenticated key exchange. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-5",
        "prompt": "An attacker can replace both a download and its hash on a website. Which change best authenticates public software releases?",
        "options": [
          "Compute a longer hash and publish it on the same website.",
          "Encrypt the hash with a key included beside the downloaded file.",
          "Verify a signature using a trusted vendor public key.",
          "Publish two different hashes alongside the same downloadable file."
        ],
        "answer": 2,
        "week": 5,
        "topic": "Hash and authenticity",
        "priority": "High",
        "explanation": "需要可信的驗證依據。用可信廠商公鑰驗證簽章可檢查來源與完整性；攻擊者若能替換檔案，也能重算同站上的一個或多個無金鑰雜湊。",
        "explanationEn": "Authenticity requires a trusted verification anchor. A signature checked using a trusted vendor public key supports origin authentication and integrity. An attacker who replaces a file can also recompute any unkeyed hashes published beside it.",
        "source": "Custom practice · Week 5 · Hash and authenticity. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-6",
        "prompt": "A backup service only reads bucket X but holds cloud-wide administrator rights. Which permission change best limits damage if its credential is stolen?",
        "options": [
          "Grant read-only access to every bucket through an account-wide role.",
          "Grant a scoped role that permits reading bucket X but no other resources.",
          "Keep administrator access and shorten the audit-log retention period.",
          "Keep administrator access and encrypt the credential in its configuration."
        ],
        "answer": 1,
        "week": 6,
        "topic": "Least privilege",
        "priority": "High",
        "explanation": "最小權限同時限制操作與資源範圍：只讀 X。全帳號唯讀仍超出需求；保護憑證並不縮小它失竊後的權限，縮短日誌保存反而可能影響調查。",
        "explanationEn": "Least privilege limits both the permitted operation and its resource scope: read access to bucket X only. Account-wide read access is still excessive. Protecting the credential does not reduce its authority once stolen, and shorter log retention can hinder investigation.",
        "source": "Custom practice · Week 6 · Least privilege. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-7",
        "prompt": "A phishing page has a valid TLS certificate for its own look-alike domain. What does successful certificate validation establish?",
        "options": [
          "The website's application code has passed an independent security review.",
          "The login form submits credentials only to an approved university service.",
          "The domain is owned by the university named in the page heading.",
          "The connection authenticates that domain within the certificate trust model."
        ],
        "answer": 3,
        "week": 7,
        "topic": "TLS domain identity",
        "priority": "High",
        "explanation": "TLS 驗證的是憑證對應網域的身分，不是頁面自稱的組織。有效 HTTPS 不代表登入表單用途正當，也不代表程式碼已通過安全審查。",
        "explanationEn": "TLS validates the identity of the domain named in the certificate, not the organisation claimed by the page. A valid HTTPS connection does not establish that a login form is legitimate or that the application has passed a security review.",
        "source": "Custom practice · Week 7 · TLS domain identity. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-8",
        "prompt": "A search endpoint concatenates user input into SQL syntax. Which change directly addresses the root cause?",
        "options": [
          "Encrypt database requests through authenticated network connections.",
          "Bind input values through parameterised queries.",
          "Hide database errors from unauthenticated website visitors.",
          "Restrict database accounts to narrowly scoped read permissions."
        ],
        "answer": 1,
        "week": 8,
        "topic": "SQL injection",
        "priority": "High",
        "explanation": "參數化查詢把資料值與 SQL 結構分開。TLS、隱藏錯誤及最小權限可提供其他防護或限制影響，但無法修正把輸入當成可執行 SQL 的根本問題。",
        "explanationEn": "Parameterised queries separate data values from executable SQL structure. TLS, hidden error messages and least-privilege database accounts address other risks or limit impact, but do not repair the underlying data-as-code mistake.",
        "source": "Custom practice · Week 8 · SQL injection. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-9",
        "prompt": "Ransomware is actively spreading between workstations. Which action primarily serves containment?",
        "options": [
          "Analyse collected logs to establish the initial entry point.",
          "Isolate affected workstations to limit further spread across reachable networks.",
          "Rebuild affected hosts using verified clean system images.",
          "Revise staff training using findings from the completed investigation."
        ],
        "answer": 1,
        "week": 9,
        "topic": "Incident containment",
        "priority": "High",
        "explanation": "Containment 的首要目的在於限制持續傷害與擴散。乾淨重建屬於清除／復原活動，根因分析與事後訓練也有價值，但目的不同。",
        "explanationEn": "Containment limits ongoing harm and spread. Rebuilding from clean images supports eradication and recovery; root-cause analysis and subsequent training serve different purposes. They do not directly isolate an actively spreading infection.",
        "source": "Custom practice · Week 9 · Incident containment. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m1-10",
        "prompt": "A static analyser reports a vulnerable path. Review proves that path cannot execute under the program's actual conditions. How should this report be classified?",
        "options": [
          "A true negative established by the analyser's original warning.",
          "A true positive requiring an additional successful test execution.",
          "A false positive caused by a path that cannot actually execute.",
          "A false negative caused by incomplete runtime test coverage."
        ],
        "answer": 2,
        "week": 11,
        "topic": "Static analysis",
        "priority": "High",
        "explanation": "工具有報警，但該問題實際不存在，屬 false positive。False negative 則是問題真的存在、工具卻沒報出來；是否執行過測試不是分類的唯一依據。",
        "explanationEn": "A warning about a vulnerability that cannot actually occur is a false positive. A false negative is a real vulnerability that the tool fails to report. Classification depends on whether the reported issue exists, not simply on whether a test has run.",
        "source": "Custom practice · Week 11 · Static analysis. Based on concepts in the weekly revision overview and course question banks."
      }
    ]
  },
  {
    "id": "mock-2",
    "kind": "mock",
    "title": "Mock Paper 2",
    "description": "Mixed high-priority topics · Includes Week 12",
    "questions": [
      {
        "id": "m2-1",
        "prompt": "A team performs its only security review after the first production incident. Which process change best addresses this lifecycle weakness?",
        "options": [
          "Move the same review to the day immediately before launch.",
          "Integrate security reviews into design, implementation and operation.",
          "Schedule the first review once enough incident reports are collected.",
          "Focus review effort on the encryption design after each release."
        ],
        "answer": 1,
        "week": 1,
        "topic": "Security lifecycle",
        "priority": "High",
        "explanation": "安全活動應貫穿設計、實作、測試、部署與營運。只移到上線前一天仍太集中；等待事件或只看加密會漏掉其他階段和風險。",
        "explanationEn": "Security activities should span design, implementation, testing, deployment and operation. Moving a single review to the day before launch remains too narrow. Waiting for incidents or reviewing only encryption misses other stages and risks.",
        "source": "Custom practice · Week 1 · Security lifecycle. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-2",
        "prompt": "An exported Android activity performs a sensitive action without checking the caller. Which property creates the relevant trust-boundary risk?",
        "options": [
          "Other applications can automatically decrypt all private app storage.",
          "The activity's code becomes modifiable by every installed application.",
          "Other installed applications may invoke the exported activity across a trust boundary.",
          "The activity's process now runs outside the Android permission system."
        ],
        "answer": 2,
        "week": 3,
        "topic": "Exported components",
        "priority": "High",
        "explanation": "Exported 會讓其他應用程式可能呼叫該元件，因此必須驗證輸入與授權。它不等於自動解密私有儲存、脫離權限系統或允許任何 app 修改程式。",
        "explanationEn": "An exported activity may be invoked by other applications across a trust boundary, so input and authorisation checks matter. Exporting it does not automatically decrypt private storage, bypass Android permissions or let other apps modify its code.",
        "source": "Custom practice · Week 3 · Exported components. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-3",
        "prompt": "Two messages use the same one-time-pad keystream K. An attacker obtains C1 and C2. What does C1 XOR C2 reveal?",
        "options": [
          "The XOR of the two plaintext messages.",
          "The full value of the reused secret key.",
          "The two plaintext messages joined together.",
          "The cryptographic hash of the reused keystream."
        ],
        "answer": 0,
        "week": 4,
        "topic": "One-time pad reuse",
        "priority": "High",
        "explanation": "C1=P1 XOR K，C2=P2 XOR K，因此 C1 XOR C2=P1 XOR P2。金鑰抵消會洩漏明文關係，但不表示一定直接取得完整金鑰或兩段明文。",
        "explanationEn": "With C1 = P1 XOR K and C2 = P2 XOR K, combining the ciphertexts gives C1 XOR C2 = P1 XOR P2. The repeated keystream cancels, exposing a plaintext relationship. This does not necessarily reveal the complete key or both plaintexts directly.",
        "source": "Custom practice · Week 4 · One-time pad reuse. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-4",
        "prompt": "An update signature verifies using a trusted vendor key. Which conclusion is best supported?",
        "options": [
          "The update server will remain available throughout the deployment.",
          "The update matches the signed content, assuming the signing key remains trusted.",
          "The installed update cannot misuse the permissions it receives.",
          "The signed program is free from exploitable logic errors."
        ],
        "answer": 1,
        "week": 5,
        "topic": "Signature limits",
        "priority": "High",
        "explanation": "有效簽章支持簽署來源與簽後完整性，不保證程式沒有漏洞、伺服器不當機，也不保證已簽署的程式不會做出有害行為。",
        "explanationEn": "With a trusted verification key and an uncompromised signing key, a valid signature supports signer authenticity and integrity since signing. It does not guarantee bug-free software, uninterrupted server availability or harmless use of permissions.",
        "source": "Custom practice · Week 5 · Signature limits. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-5",
        "prompt": "A login service must verify passwords but never needs to recover them. Which design best fits that requirement?",
        "options": [
          "Use one shared salt and allow support to retrieve stored passwords.",
          "Use a fast unsalted hash and restrict access to the database.",
          "Use reversible encryption and restrict access to the decryption key.",
          "Use a suitable salted password hash and reset forgotten passwords."
        ],
        "answer": 3,
        "week": 6,
        "topic": "Password storage",
        "priority": "High",
        "explanation": "密碼驗證宜使用合適的加鹽密碼雜湊，忘記時重設。可逆加密保留了還原密碼的風險；快速無鹽雜湊較利於大量猜測，雜湊本身也不是供客服還原密碼的工具。",
        "explanationEn": "Use an appropriate salted password-hashing function for verification and reset forgotten passwords. Reversible encryption retains a recovery risk. Fast unsalted hashing makes large-scale guessing easier; password hashes are not intended for support staff to recover original passwords.",
        "source": "Custom practice · Week 6 · Password storage. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-6",
        "prompt": "A manager argues that TCP's connection-oriented design makes an admin interface secure. Which response is most accurate?",
        "options": [
          "Reliable delivery does not itself provide peer authentication or confidentiality.",
          "Retransmission provides message authenticity but leaves availability to the network provider.",
          "Sequence numbers authenticate the server but leave client authentication to applications.",
          "Connection establishment provides confidentiality but leaves message integrity to applications."
        ],
        "answer": 0,
        "week": 7,
        "topic": "TCP reliability",
        "priority": "High",
        "explanation": "TCP 的連線、排序與重傳主要處理可靠傳輸，本身不提供密碼學上的機密性或身分驗證。這些需求要用適當安全協定及控制補足。",
        "explanationEn": "TCP connection establishment, ordering and retransmission primarily support reliable transport. They do not themselves provide cryptographic confidentiality or peer authentication. Those requirements need suitable security protocols and controls.",
        "source": "Custom practice · Week 7 · TCP reliability. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-7",
        "prompt": "A forum wants to display comments as plain text, never as HTML. Which primary change best prevents comment text from executing as browser script?",
        "options": [
          "Encrypt stored comments before inserting them into HTML pages.",
          "Apply SQL parameterisation to the comment retrieval query.",
          "Use context-appropriate HTML output encoding for all comment text.",
          "Require user authentication before accepting any new comment text."
        ],
        "answer": 2,
        "week": 8,
        "topic": "Cross-site scripting",
        "priority": "High",
        "explanation": "在輸出位置做相符的編碼，能讓文字被當成資料而非腳本。SQL 參數化處理的是 SQLi；登入和儲存加密也不能阻止惡意文字被瀏覽器當程式執行。",
        "explanationEn": "Context-appropriate output encoding makes plain-text comments render as data rather than executable script. SQL parameterisation addresses SQL injection. Authentication and encryption at rest do not prevent unsafe output from being interpreted as browser code.",
        "source": "Custom practice · Week 8 · Cross-site scripting. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-8",
        "prompt": "A compromised sensor submits a false reading that a blockchain records consistently. Which security property is still missing?",
        "options": [
          "Replication of the accepted update across the participating nodes.",
          "Trustworthiness of readings supplied by the external sensor.",
          "Agreement among nodes about the recorded transaction history.",
          "Consistent ordering of the update within the shared ledger."
        ],
        "answer": 1,
        "week": 10,
        "topic": "Consensus and external data",
        "priority": "High",
        "explanation": "節點同意共同歷史，不代表外部資料是真的。這裡共識和記錄可以正常運作，缺的是感測器／資料來源的可信度與驗證。",
        "explanationEn": "Agreement on shared history does not establish that external data is true. Consensus and replication can work correctly while a compromised sensor supplies false readings. The missing assurance concerns the external source and its input.",
        "source": "Custom practice · Week 10 · Consensus and external data. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-9",
        "prompt": "Dynamic tests pass, but they never exercise the application's file-import path. What is the strongest justified conclusion?",
        "options": [
          "The import path is safe because the surrounding application passed testing.",
          "The path contains a vulnerability because its behaviour was not observed.",
          "The path's safety follows from the absence of warnings during testing.",
          "The tests provide no runtime evidence about that unexecuted path."
        ],
        "answer": 3,
        "week": 11,
        "topic": "Dynamic testing",
        "priority": "High",
        "explanation": "動態測試只對實際執行的輸入和路徑提供證據。未測路徑不能因此被宣告安全，也不能直接斷言有漏洞；這正是可能產生漏報的原因。",
        "explanationEn": "Dynamic tests provide runtime evidence only for the inputs and paths they exercise. An untested path cannot be declared safe, but lack of testing also does not prove it is vulnerable. Limited coverage can lead to false negatives.",
        "source": "Custom practice · Week 11 · Dynamic testing. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m2-10",
        "prompt": "A connected infusion controller issues incorrect doses while patient records remain confidential. Which concern is most directly illustrated?",
        "options": [
          "Confidentiality failures are necessary before physical harm can occur.",
          "Database encryption is sufficient to preserve safe device behaviour.",
          "Device command integrity failures can directly threaten physical safety.",
          "Device authentication establishes the correctness of every issued command."
        ],
        "answer": 2,
        "week": 12,
        "topic": "Cyber-physical integrity",
        "priority": "Medium",
        "explanation": "CPS 的完整性錯誤可能直接造成物理傷害，即使個資沒有外洩。加密與認證仍重要，但不能單獨保證每個控制指令都正確或安全。",
        "explanationEn": "Integrity failures in cyber-physical systems can directly cause physical harm even if no private records are exposed. Encryption and authentication remain useful, but neither alone guarantees that every device command is correct or safe.",
        "source": "Custom practice · Week 12 · Cyber-physical integrity. Based on concepts in the weekly revision overview and course question banks."
      }
    ]
  },
  {
    "id": "mock-3",
    "kind": "mock",
    "title": "Mock Paper 3",
    "description": "Mixed high-priority topics",
    "questions": [
      {
        "id": "m3-1",
        "prompt": "Two analysts disagree because one assumes a stolen account and the other assumes no credentials. What should they do first to make the comparison meaningful?",
        "options": [
          "Average the two risk scores to remove the effects of modelling choices.",
          "Choose the lower estimate because it requires fewer attacker capabilities.",
          "Choose the higher estimate and discard the conditions behind both claims.",
          "Make each model explicit about attacker capabilities, then compare their assumptions."
        ],
        "answer": 3,
        "week": 1,
        "topic": "Explicit assumptions",
        "priority": "High",
        "explanation": "安全結論依賴威脅模型的前提。先明確對齊或分別陳述攻擊能力與假設，才能比較；直接取平均、取高或取低會掩蓋差異。",
        "explanationEn": "Security conclusions depend on their threat-model assumptions. Make the attacker capabilities explicit and align the models, or clearly distinguish their conditions, before comparing conclusions. Averaging or simply selecting a score hides that difference.",
        "source": "Custom practice · Week 1 · Explicit assumptions. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-2",
        "prompt": "An AI coding agent can inspect a repository but suggests modifying production data to validate a finding. Which boundary is most appropriate?",
        "options": [
          "Allow the change when the model reports a sufficiently high confidence score.",
          "Expand production permissions temporarily and review the resulting logs afterwards.",
          "Allow the change when the agent has already found a similar local issue.",
          "Restrict tools to the authorised scope and require review for escalation."
        ],
        "answer": 3,
        "week": 2,
        "topic": "Agent authority",
        "priority": "High",
        "explanation": "能力不等於授權。工具權限應限制在授權範圍，擴權或高影響操作先經適當審查；模型信心、相似案例和事後日誌都不能取代授權。",
        "explanationEn": "Capability is not authorisation. Tool permissions should remain within the approved scope, with appropriate review before escalation or high-impact actions. Model confidence, similar local findings and after-the-fact logs do not replace authorisation.",
        "source": "Custom practice · Week 2 · Agent authority. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-3",
        "prompt": "A legacy application encrypts structured records with ECB using one key. What information may an observer infer from repeated ciphertext blocks?",
        "options": [
          "The corresponding plaintext blocks reveal the encryption key.",
          "The corresponding plaintext blocks are identical.",
          "The corresponding records contain the same complete transaction.",
          "The corresponding records were created by the same user."
        ],
        "answer": 1,
        "week": 4,
        "topic": "ECB patterns",
        "priority": "High",
        "explanation": "同一金鑰下 ECB 對相同明文區塊產生相同密文區塊，因此洩漏重複模式。但只看區塊相同不能推論整筆交易、使用者或金鑰都相同。",
        "explanationEn": "Under the same key, ECB maps identical plaintext blocks to identical ciphertext blocks, revealing repeated patterns. Matching blocks alone do not show that entire transactions, their users or the encryption key have been recovered.",
        "source": "Custom practice · Week 4 · ECB patterns. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-4",
        "prompt": "A device accepts a correctly authenticated command that was already processed yesterday. Which additional check most directly prevents this replay?",
        "options": [
          "Store the accepted command in an encrypted audit log after execution.",
          "Replace the encryption algorithm with another cipher using longer keys.",
          "Reject previously accepted sequence numbers for the authenticated session.",
          "Add another authentication tag computed over exactly the same message."
        ],
        "answer": 2,
        "week": 5,
        "topic": "Replay protection",
        "priority": "High",
        "explanation": "重放訊息原本就可能有正確的驗證標籤。接收端必須驗證新鮮度，例如追蹤並拒絕已接受的序號；更長金鑰、重複 MAC 或事後記錄都不會使舊訊息失效。",
        "explanationEn": "A replayed message may already have a valid authentication tag. The receiver must check freshness, for example by tracking and rejecting sequence numbers already accepted for that session. Longer keys, another MAC or logging after execution do not invalidate an old command.",
        "source": "Custom practice · Week 5 · Replay protection. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-5",
        "prompt": "A logged-in student changes a URL record ID and reads another student's marks. Which missing control most directly explains the flaw?",
        "options": [
          "Check password strength when the student first creates an account.",
          "Check certificate validity when the browser establishes its connection.",
          "Check the encryption key length used by the database server.",
          "Enforce the logged-in user's authorisation for each record requested from the service."
        ],
        "answer": 3,
        "week": 6,
        "topic": "Object-level authorisation",
        "priority": "High",
        "explanation": "登入只證明身分，存取每筆物件仍要授權。這是物件層級授權缺失；密碼強度、TLS 憑證和資料庫加密不能代替逐物件的存取權檢查。",
        "explanationEn": "Authentication establishes identity; access to each requested object still needs authorisation. This is a missing object-level access check. Password strength, TLS certificates and database encryption cannot substitute for that check.",
        "source": "Custom practice · Week 6 · Object-level authorisation. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-6",
        "prompt": "A TLS-enabled service is flooded until its network link is saturated. Which change most directly addresses this bottleneck?",
        "options": [
          "Arrange upstream filtering or traffic scrubbing.",
          "Encrypt application records before storing them in the database.",
          "Require a second authentication factor after users reach login.",
          "Replace its certificate with one using a longer key."
        ],
        "answer": 0,
        "week": 7,
        "topic": "DDoS and availability",
        "priority": "High",
        "explanation": "瓶頸在上游頻寬，需在流量抵達受限連線前分流或過濾。憑證、資料加密或登入後 MFA 不會恢復已被耗盡的網路容量。",
        "explanationEn": "The bottleneck is upstream network capacity, so traffic must be filtered or diverted before it saturates the constrained link. Stronger certificates, database encryption and MFA after reaching login do not restore exhausted bandwidth.",
        "source": "Custom practice · Week 7 · DDoS and availability. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-7",
        "prompt": "An IDS threshold is raised to produce fewer alerts. What trade-off should the team evaluate?",
        "options": [
          "Every remaining alert will now correspond to a real attack.",
          "Previously missed attacks will now become easier to detect.",
          "Some real attacks may fall below the revised alert threshold.",
          "Benign traffic will now always generate more security alerts."
        ],
        "answer": 2,
        "week": 8,
        "topic": "Detection trade-offs",
        "priority": "High",
        "explanation": "提高門檻通常減少警報，但也可能增加 false negatives。仍須評估漏報與調查工作量，不能認為剩下的警報必定都正確。",
        "explanationEn": "Raising an alert threshold can reduce alerts while also allowing real attacks to fall below it, increasing false negatives. The team must assess missed attacks alongside investigation workload. Remaining alerts are not automatically all correct.",
        "source": "Custom practice · Week 8 · Detection trade-offs. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-8",
        "prompt": "During incident response, which record most directly supports later reconstruction of how evidence was handled?",
        "options": [
          "A chain-of-custody log documenting collection and transfers.",
          "A list of scheduled patch releases for affected systems.",
          "A dashboard showing the total number of security alerts.",
          "A business plan describing the service's planned recovery targets."
        ],
        "answer": 0,
        "week": 9,
        "topic": "Evidence handling",
        "priority": "High",
        "explanation": "Chain of custody 記錄證據由誰、何時、如何收集與移轉，有助追溯處理過程。警報數、修補排程和復原目標具有其他用途，但不能取代保管鏈。",
        "explanationEn": "A chain-of-custody log records who collected or transferred evidence, when and how, supporting traceability of its handling. Alert totals, patch schedules and recovery targets have other purposes and cannot replace that record.",
        "source": "Custom practice · Week 9 · Evidence handling. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-9",
        "prompt": "A trader sees a pending purchase and inserts a trade ahead of it to profit from the price change. What does this demonstrate?",
        "options": [
          "Consensus on history proves that external price data is accurate.",
          "Consensus on the shared history does not ensure fair transaction order.",
          "Signatures prevent other participants from inserting earlier competing trades.",
          "Replication protects pending transactions from competing participants."
        ],
        "answer": 1,
        "week": 10,
        "topic": "Transaction ordering",
        "priority": "High",
        "explanation": "共識可確定最終排序，但不保證排序公平。看到待處理交易後搶先插入交易屬排序風險；簽章和複寫都不會直接消除這種誘因與行為。",
        "explanationEn": "Consensus can establish the final shared ordering without making that ordering fair. Inserting a trade ahead of a visible pending transaction illustrates ordering risk. Signatures and replication do not directly remove that opportunity or incentive.",
        "source": "Custom practice · Week 10 · Transaction ordering. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m3-10",
        "prompt": "A tired employee approves a convincing phishing request. Management proposes training alone. Which response best addresses the broader cause?",
        "options": [
          "Measure success mainly by the number of awareness modules staff complete.",
          "Require staff to accept personal responsibility for future approval mistakes.",
          "Combine usable workflows with technical safeguards and clear reporting paths.",
          "Increase training frequency while keeping the same approval workflow and pressures."
        ],
        "answer": 2,
        "week": 11,
        "topic": "Human factors",
        "priority": "High",
        "explanation": "人的判斷受疲勞、工作量和流程設計影響。訓練應搭配易用流程、技術防護與通報管道；只加課程、計算完成率或責備個人，沒有處理系統性因素。",
        "explanationEn": "Fatigue, workload and workflow design influence human decisions. Training should be complemented by usable processes, technical safeguards and clear reporting paths. More modules, completion counts or individual blame alone do not address those system-level factors.",
        "source": "Custom practice · Week 11 · Human factors. Based on concepts in the weekly revision overview and course question banks."
      }
    ]
  },
  {
    "id": "mock-4",
    "kind": "mock",
    "title": "Mock Paper 4",
    "description": "Mixed high-priority topics · Includes Week 12",
    "questions": [
      {
        "id": "m4-1",
        "prompt": "Two AI-generated findings have equally high severity ratings. Which evidence best supports prioritising one as a confirmed vulnerability?",
        "options": [
          "A reproducible execution trace showing the claimed security impact.",
          "A higher confidence score generated by a second run of the model.",
          "A longer written explanation containing more names of vulnerability classes.",
          "A code patch produced before anyone has reproduced the reported behaviour."
        ],
        "answer": 0,
        "week": 2,
        "topic": "Reproducible findings",
        "priority": "High",
        "explanation": "可重現的執行路徑與安全影響才是確認漏洞的重要證據。文字長度、重複模型信心或提前生成修補程式，都不等於已驗證的漏洞。",
        "explanationEn": "A reproducible execution trace demonstrating the claimed security impact is evidence for confirming a vulnerability. A longer report, another model confidence score or an untested generated patch does not provide the same verification.",
        "source": "Custom practice · Week 2 · Reproducible findings. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-2",
        "prompt": "A developer embeds a long-lived API secret in an APK and obfuscates the code. Which assessment is most accurate?",
        "options": [
          "Obfuscation provides the same secrecy guarantee as server-side storage.",
          "Client-side obfuscation may slow inspection but cannot keep an embedded secret confidential.",
          "Package signing encrypts embedded strings against extraction by external tools.",
          "The Android sandbox prevents the device owner from inspecting the APK."
        ],
        "answer": 1,
        "week": 3,
        "topic": "APK secrets",
        "priority": "High",
        "explanation": "使用者能取得的客戶端套件可以被分析；混淆只增加難度，不能讓長期後端秘密變成可信的機密。Sandbox 與套件簽章也不提供這種秘密保護。",
        "explanationEn": "A client package can be obtained and inspected. Obfuscation may increase the effort required, but it does not make an embedded long-lived backend secret confidential. Android sandboxing and package signing do not provide that secrecy guarantee.",
        "source": "Custom practice · Week 3 · APK secrets. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-3",
        "prompt": "A team needs confidentiality and tamper detection for network messages. Which construction best matches both goals?",
        "options": [
          "A digital signature attached to each unencrypted message payload.",
          "A collision-resistant unkeyed hash sent beside each plaintext message.",
          "Use authenticated encryption with scheme-appropriate nonce handling.",
          "Unauthenticated encryption with a longer randomly generated secret key."
        ],
        "answer": 2,
        "week": 4,
        "topic": "Cryptographic goals",
        "priority": "High",
        "explanation": "AEAD 在正確使用下結合機密性與鑑別完整性。明文加 hash 或簽章不提供機密性；單純拉長金鑰也不能替無鑑別加密補上完整性保證。",
        "explanationEn": "Correctly used authenticated encryption combines confidentiality with authenticated integrity, including the required nonce handling. Plaintext plus a hash or signature does not conceal the content. A longer key does not add integrity to unauthenticated encryption.",
        "source": "Custom practice · Week 4 · Cryptographic goals. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-4",
        "prompt": "A receiver shares a MAC key with the sender. Why is that MAC insufficient to prove to an independent third party which of them created a message?",
        "options": [
          "A MAC hides content but does not detect changes.",
          "A receiver verifies tags without any secret.",
          "A public key lets anyone generate the same tag.",
          "Either key holder can generate a valid tag."
        ],
        "answer": 3,
        "week": 5,
        "topic": "MAC versus signature",
        "priority": "High",
        "explanation": "共享秘密 MAC 的雙方都能產生標籤，因此無法單靠它向第三方區分是哪方產生。MAC 有鑑別完整性用途，卻不是公鑰簽章，也不自動加密內容。",
        "explanationEn": "Both parties holding a shared MAC key can generate valid tags, so the MAC alone cannot prove to an independent third party which holder created the message. A MAC supports authenticated integrity; it is not a public-key signature and does not automatically encrypt content.",
        "source": "Custom practice · Week 5 · MAC versus signature. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-5",
        "prompt": "An attacker uses a stolen account to download authorised records from an encrypted database. Which statement best explains why encryption did not stop the breach?",
        "options": [
          "The service decrypted records under the compromised account's permissions.",
          "The database must have stored all requested records without encryption.",
          "The successful login revealed the database's encryption key to the attacker.",
          "The attacker must have broken the cipher before downloading any records."
        ],
        "answer": 0,
        "week": 6,
        "topic": "Compromised identity",
        "priority": "High",
        "explanation": "服務可能依帳號權限正常解密並提供資料，攻擊者利用的是失竊身分與存取權。不能據此推論演算法被破解、金鑰被揭露或資料未加密。",
        "explanationEn": "The service may correctly decrypt and return data according to the compromised account permissions. The attacker exploited identity and access rather than necessarily breaking the cipher. The incident alone does not prove key disclosure or unencrypted storage.",
        "source": "Custom practice · Week 6 · Compromised identity. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-6",
        "prompt": "A browser reports that a login certificate does not match the requested hostname. What is the best immediate action?",
        "options": [
          "Proceed if the page design matches the organisation's usual login screen.",
          "Proceed if the certificate uses a strong encryption key and current dates.",
          "Submit the password once and inspect the account activity after signing in.",
          "Stop the login attempt and verify the intended address using an independent trusted channel."
        ],
        "answer": 3,
        "week": 7,
        "topic": "Certificate mismatch",
        "priority": "High",
        "explanation": "名稱不符代表尚未建立預期網域的可信身分。頁面外觀、金鑰強度和有效日期都不能補足這個問題；先提交密碼再檢查已經太晚。",
        "explanationEn": "A hostname mismatch means the expected domain identity has not been established. Familiar page design, a strong key and valid certificate dates do not resolve that mismatch. Submitting a password before checking may already expose it.",
        "source": "Custom practice · Week 7 · Certificate mismatch. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-7",
        "prompt": "A vulnerable library runs inside a service whose own source code has no obvious flaws. Why must the library still be assessed?",
        "options": [
          "The library's executable code contributes to the service's attack surface.",
          "Its separate release process prevents application-level security controls from working.",
          "Its vendor is responsible for every operational consequence of deployment.",
          "Its vulnerability proves that the service has already been compromised."
        ],
        "answer": 0,
        "week": 8,
        "topic": "Vulnerable dependencies",
        "priority": "High",
        "explanation": "第三方程式也在應用內執行並接觸資源，所以是攻擊面的一部分。存在漏洞不等於已遭入侵；供應商責任也不免除部署者評估與修補的需要。",
        "explanationEn": "Third-party code executes within the application and can access its resources, making it part of the attack surface. A known flaw does not prove exploitation has already occurred. Vendor responsibility does not remove the need for assessment and patching by the deploying organisation.",
        "source": "Custom practice · Week 8 · Vulnerable dependencies. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-8",
        "prompt": "A team proposes retaining detailed staff browsing histories indefinitely for login anomaly detection. Which question best evaluates proportionality?",
        "options": [
          "Can the monitoring platform export every collected event into one searchable format?",
          "Can the organisation afford storage for every employee's complete browsing history?",
          "Will collecting more information reduce the number of separate monitoring tools needed?",
          "Is this collection and retention necessary for the stated security purpose?"
        ],
        "answer": 3,
        "week": 9,
        "topic": "Proportionate monitoring",
        "priority": "High",
        "explanation": "比例原則要比較安全目的、必要資料與對人的影響，也要檢視保存期限。買得起容量、容易搜尋或整合工具，都不等於無限收集與保存是合理的。",
        "explanationEn": "Proportionality considers the security purpose, the data genuinely needed, its effects on people and the retention period. Affordable storage, convenient searching or tool consolidation does not justify unrestricted collection and indefinite retention.",
        "source": "Custom practice · Week 9 · Proportionate monitoring. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-9",
        "prompt": "A consortium adopts Raft for a known set of nodes. Which condition needs special attention in a security review?",
        "options": [
          "Whether participants can agree on an order for updates to shared state.",
          "Whether failures include malicious behaviour beyond the crash-fault model.",
          "Whether replicas need to exchange messages over the organisation's network.",
          "Whether the system requires a leader to coordinate the replicated log."
        ],
        "answer": 1,
        "week": 10,
        "topic": "Consensus assumptions",
        "priority": "High",
        "explanation": "Raft 主要處理 crash faults，不能直接假設它也提供 Byzantine fault tolerance。排序、leader 和節點通訊是協定運作的一部分；惡意節點能力可能超出它的假設。",
        "explanationEn": "Raft primarily addresses crash faults; Byzantine fault tolerance should not be assumed. Ordering, leadership and replica communication are parts of normal operation. Malicious-node behaviour can exceed the protocol failure assumptions and needs explicit assessment.",
        "source": "Custom practice · Week 10 · Consensus assumptions. Based on concepts in the weekly revision overview and course question banks."
      },
      {
        "id": "m4-10",
        "prompt": "A cloud service changes configuration automatically every day but receives only an annual security review. Which improvement best fits the changing environment?",
        "options": [
          "Rely on the last approved configuration as evidence for new deployments.",
          "Evaluate only the cloud provider's infrastructure assurance documentation each year.",
          "Continuously check configuration changes and investigate policy violations.",
          "Review a larger configuration sample at the next annual assessment."
        ],
        "answer": 2,
        "week": 12,
        "topic": "Continuous assurance",
        "priority": "Medium",
        "explanation": "環境持續變動時，舊的檢查不能代表現在的狀態。持續蒐集設定與政策符合性證據、處理偏差，可補足年度審查；僅擴大年檢或查看供應商文件仍有空窗。",
        "explanationEn": "In a continuously changing environment, an earlier review is not evidence of the current configuration. Ongoing configuration checks, policy-compliance evidence and investigation of deviations complement annual reviews. A larger annual sample or provider documentation alone leaves gaps.",
        "source": "Custom practice · Week 12 · Continuous assurance. Based on concepts in the weekly revision overview and course question banks."
      }
    ]
  },
  {
    "id": "teacher-prep",
    "kind": "teacher",
    "title": "Instructor: Full Course",
    "description": "Exam Preparation · Original wording and options",
    "questions": [
      {
        "id": "prep-1",
        "originalNumber": 1,
        "prompt": "A service becomes reachable from more networks and devices. What is the most direct security implication?",
        "options": [
          "The attack surface may increase as more paths become reachable.",
          "Confidentiality automatically improves because access is broader.",
          "Threat modelling is no longer needed after deployment.",
          "Every new connection provides an independent security control."
        ],
        "answer": 0,
        "explanation": "可接觸的介面與路徑增加，攻擊面也可能增加。連線擴張不會自動提升機密性，更不能省略威脅建模。",
        "explanationEn": "More reachable interfaces and paths can increase the attack surface. Broader connectivity does not automatically improve confidentiality or remove the need for threat modelling.",
        "source": "Exam Preparation Question Bank · Original Q1. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q1 with identical wording and options."
      },
      {
        "id": "prep-2",
        "originalNumber": 2,
        "prompt": "Why are explicit threat-model assumptions useful?",
        "options": [
          "They guarantee that vulnerabilities cannot exist.",
          "They make attacker capabilities and security goals clear for evaluation.",
          "They remove the need for monitoring after deployment.",
          "They prove every security claim for every environment."
        ],
        "answer": 1,
        "explanation": "安全結論依賴資產、攻擊能力、信任與目標等前提。明確記錄這些假設，才能評估結論適用於什麼環境。",
        "explanationEn": "Security conclusions depend on assumptions about assets, attacker capabilities, trust and goals. Making these explicit allows others to assess when the conclusions apply.",
        "source": "Exam Preparation Question Bank · Original Q2. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q2 with identical wording and options."
      },
      {
        "id": "prep-3",
        "originalNumber": 3,
        "prompt": "An AI assistant reports a vulnerability but cannot point to real code or reproducible evidence. What should an analyst do?",
        "options": [
          "Accept it because confidence is sufficient.",
          "Publish it immediately as a confirmed issue.",
          "Verify it against real code and controlled testing.",
          "Reject all AI-assisted findings without review."
        ],
        "answer": 2,
        "explanation": "AI 的輸出是需要驗證的線索。以真實程式碼及有授權的受控測試取得可重現證據，不能用模型信心代替證據。",
        "explanationEn": "AI output is a hypothesis to verify. Check real code and obtain reproducible evidence through authorised, controlled testing; confidence alone is not proof.",
        "source": "Exam Preparation Question Bank · Original Q3. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q3 with identical wording and options."
      },
      {
        "id": "prep-4",
        "originalNumber": 4,
        "prompt": "Which control best limits the authority of an AI coding agent?",
        "options": [
          "Administrator access to all systems.",
          "Disabled logging for generated commands.",
          "Automatic execution of every suggested action.",
          "Least-privilege tool permissions with human review."
        ],
        "answer": 3,
        "explanation": "最小工具權限限制 AI 能造成的影響，人類審查提供必要把關。全面管理員權限、關閉日誌或無條件執行都會增加風險。",
        "explanationEn": "Least-privilege tool permissions limit the impact of agent actions, while human review provides oversight. Broad administrator access, disabled logging or unconditional execution increase risk.",
        "source": "Exam Preparation Question Bank · Original Q4. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q4 with identical wording and options."
      },
      {
        "id": "prep-5",
        "originalNumber": 5,
        "prompt": "Why can an exported Android activity create risk?",
        "options": [
          "External applications may be able to invoke it across a trust boundary.",
          "Exported activities cannot receive any external input.",
          "Android automatically encrypts all intent data.",
          "The activity becomes invisible to the operating system."
        ],
        "answer": 0,
        "explanation": "Exported activity 可能讓外部 app 跨越信任邊界來呼叫，因此要檢查輸入、呼叫者與授權。",
        "explanationEn": "An exported activity may be reachable by other apps across a trust boundary. Inputs, callers and authorisation therefore need appropriate checks.",
        "source": "Exam Preparation Question Bank · Original Q5. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q5 with identical wording and options."
      },
      {
        "id": "prep-6",
        "originalNumber": 6,
        "prompt": "Why should a long-lived backend secret not be embedded in an APK?",
        "options": [
          "APKs prevent all network connections.",
          "The APK can be inspected and the secret may be recovered.",
          "Android converts every secret into a certificate.",
          "The sandbox automatically publishes embedded secrets."
        ],
        "answer": 1,
        "explanation": "APK 可被取得與分析，內嵌的長期秘密可能被還原。不能把客戶端套件當成安全的後端秘密儲存處。",
        "explanationEn": "APKs can be obtained and analysed, so an embedded long-lived secret may be recovered. Client packages should not be treated as secure storage for backend secrets.",
        "source": "Exam Preparation Question Bank · Original Q6. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q6 with identical wording and options."
      },
      {
        "id": "prep-7",
        "originalNumber": 7,
        "prompt": "What property does encryption primarily provide?",
        "options": [
          "Availability",
          "Non-repudiation",
          "Confidentiality",
          "Patch management"
        ],
        "answer": 2,
        "explanation": "加密主要保護機密性，也就是防止未授權讀取。可用性、不可否認性或修補管理需要其他機制。",
        "explanationEn": "Encryption primarily protects confidentiality by preventing unauthorised reading. Availability, non-repudiation and patch management require other mechanisms.",
        "source": "Exam Preparation Question Bank · Original Q7. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q7 with identical wording and options."
      },
      {
        "id": "prep-8",
        "originalNumber": 8,
        "prompt": "Why is a one-time pad usually impractical?",
        "options": [
          "It cannot decrypt correctly.",
          "It requires public-key signatures for every bit.",
          "It provides no confidentiality.",
          "It requires a random message-length key securely shared and used once."
        ],
        "answer": 3,
        "explanation": "OTP 要求真正隨機、與訊息等長、安全共享且只使用一次的金鑰。難點主要在金鑰分發與管理，而非解密失敗。",
        "explanationEn": "A one-time pad needs a truly random, message-length key that is securely shared and never reused. Key distribution and management make this difficult in practice.",
        "source": "Exam Preparation Question Bank · Original Q8. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q8 with identical wording and options."
      },
      {
        "id": "prep-9",
        "originalNumber": 9,
        "prompt": "What distinguishes a MAC such as HMAC from an unkeyed hash?",
        "options": [
          "A MAC uses secret key material for message authentication and integrity.",
          "A MAC always provides confidentiality.",
          "A MAC uses no secret information.",
          "A MAC is always a public-key signature."
        ],
        "answer": 0,
        "explanation": "MAC 使用秘密金鑰檢查訊息鑑別與完整性。無金鑰 hash 不提供相同的來源保證，MAC 也不自動加密訊息。",
        "explanationEn": "A MAC uses secret key material for message authentication and integrity. An unkeyed hash does not provide the same origin assurance, and a MAC does not automatically encrypt content.",
        "source": "Exam Preparation Question Bank · Original Q9. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q9 with identical wording and options."
      },
      {
        "id": "prep-10",
        "originalNumber": 10,
        "prompt": "A signed software update verifies correctly. What does this most directly support?",
        "options": [
          "The software contains no bugs.",
          "The update came from the expected signer and was not modified after signing.",
          "The download server will always be available.",
          "The update is confidential from all users."
        ],
        "answer": 1,
        "explanation": "在可信公鑰與金鑰未被破壞的前提下，有效簽章支持預期簽署者與簽後未修改。它不保證程式無漏洞、保密或服務不中斷。",
        "explanationEn": "With a trusted public key and an uncompromised signing key, a valid signature supports the expected signer and integrity since signing. It does not guarantee bug-free software, confidentiality or uninterrupted availability.",
        "source": "Exam Preparation Question Bank · Original Q10. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q10 with identical wording and options."
      },
      {
        "id": "prep-11",
        "originalNumber": 11,
        "prompt": "An attacker resends a previously valid authenticated command. What attack is this?",
        "options": [
          "SQL injection",
          "Cross-site scripting",
          "Replay",
          "Password spraying"
        ],
        "answer": 2,
        "explanation": "重新送出以前有效的指令就是 replay。舊訊息可能仍通過鑑別，因此還需要接收端檢查新鮮度。",
        "explanationEn": "Resending an earlier valid command is a replay attack. An old message may still pass authentication, so the receiver also needs freshness checks.",
        "source": "Exam Preparation Question Bank · Original Q11. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q11 with identical wording and options."
      },
      {
        "id": "prep-12",
        "originalNumber": 12,
        "prompt": "A cloud service account needs one bucket but has administrator rights. Which principle is violated?",
        "options": [
          "Perfect secrecy",
          "Certificate transparency",
          "Non-repudiation",
          "Least privilege"
        ],
        "answer": 3,
        "explanation": "帳號只需操作一個 bucket，卻擁有全帳號管理員權限，違反最小權限。失竊時也會擴大可存取的範圍。",
        "explanationEn": "The account has more authority than its task requires, violating least privilege. Compromise of that credential also exposes a wider resource scope.",
        "source": "Exam Preparation Question Bank · Original Q12. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q12 with identical wording and options."
      },
      {
        "id": "prep-13",
        "originalNumber": 13,
        "prompt": "A user approves an unexpected MFA push after receiving many repeated prompts. What weakness is illustrated?",
        "options": [
          "MFA fatigue or push-bombing pressure on the user.",
          "A cryptographic hash collision.",
          "A consensus failure in a distributed ledger.",
          "An Android sandbox escape."
        ],
        "answer": 0,
        "explanation": "反覆發出 MFA 推播會利用疲勞或慣性，讓使用者誤按批准。這是 MFA fatigue／push bombing，不是密碼雜湊碰撞。",
        "explanationEn": "Repeated MFA prompts exploit fatigue or habitual approval, potentially inducing an unwanted approval. This is MFA fatigue or push bombing, not a hash collision.",
        "source": "Exam Preparation Question Bank · Original Q13. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q13 with identical wording and options."
      },
      {
        "id": "prep-14",
        "originalNumber": 14,
        "prompt": "What does a valid TLS certificate check primarily help a browser establish?",
        "options": [
          "That the website contains no application vulnerabilities.",
          "That it is communicating with the intended server/domain within the trust model.",
          "That phishing is impossible on every HTTPS site.",
          "That the server can never suffer denial of service."
        ],
        "answer": 1,
        "explanation": "憑證驗證有助確認連線對象是請求網域，在憑證信任模型下建立伺服器身分；不代表網站沒有漏洞或不是釣魚網站。",
        "explanationEn": "Certificate validation helps establish the identity of the requested server/domain within the certificate trust model. It does not show that the site is free of vulnerabilities or deception.",
        "source": "Exam Preparation Question Bank · Original Q14. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q14 with identical wording and options."
      },
      {
        "id": "prep-15",
        "originalNumber": 15,
        "prompt": "A DDoS prevents legitimate users from reaching a service. Which CIA goal is most directly affected?",
        "options": [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Non-repudiation"
        ],
        "answer": 2,
        "explanation": "DDoS 讓合法使用者無法使用服務，直接影響 CIA 中的 availability。題目沒有指出資料被讀取或竄改。",
        "explanationEn": "Preventing legitimate users from accessing a service directly affects availability in the CIA triad. The question does not describe data disclosure or modification.",
        "source": "Exam Preparation Question Bank · Original Q15. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q15 with identical wording and options."
      },
      {
        "id": "prep-16",
        "originalNumber": 16,
        "prompt": "A web application concatenates untrusted input into SQL syntax. What vulnerability may result?",
        "options": [
          "Replay",
          "DDoS",
          "Cross-site scripting",
          "SQL injection"
        ],
        "answer": 3,
        "explanation": "把不可信輸入拼接進 SQL 結構可能讓輸入改變查詢意義，形成 SQL injection。主要修正方式是參數化查詢。",
        "explanationEn": "Concatenating untrusted input into SQL can let that input alter the query structure or meaning, causing SQL injection. Parameterised queries address this root cause.",
        "source": "Exam Preparation Question Bank · Original Q16. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q16 with identical wording and options."
      },
      {
        "id": "prep-17",
        "originalNumber": 17,
        "prompt": "A browser executes attacker-supplied script because user content was output unsafely. What is this?",
        "options": [
          "Cross-site scripting",
          "Password hashing",
          "Transaction ordering",
          "Certificate validation"
        ],
        "answer": 0,
        "explanation": "不安全輸出讓攻擊者內容在受害者瀏覽器中執行腳本，就是 XSS。應使用符合輸出情境的編碼與安全呈現方式。",
        "explanationEn": "Executing attacker-supplied script through unsafe output in a victim browser is cross-site scripting. Context-appropriate output encoding and safe rendering help prevent it.",
        "source": "Exam Preparation Question Bank · Original Q17. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q17 with identical wording and options."
      },
      {
        "id": "prep-18",
        "originalNumber": 18,
        "prompt": "An IDS reports an attack that is not actually present. How is this classified?",
        "options": [
          "False negative",
          "False positive",
          "True negative",
          "Replay"
        ],
        "answer": 1,
        "explanation": "有警報，但實際沒有攻擊，是 false positive（誤報）。有真實攻擊卻沒有報出來才是 false negative（漏報）。",
        "explanationEn": "An alert when no attack is actually present is a false positive. A real attack that goes unreported is a false negative.",
        "source": "Exam Preparation Question Bank · Original Q18. Answer checked against the accompanying Answer Guide. Also appears as W1–8 Q18 with identical wording and options."
      },
      {
        "id": "prep-19",
        "originalNumber": 19,
        "prompt": "What can consensus provide in a replicated ledger?",
        "options": [
          "Proof that every external input is truthful.",
          "A guarantee that transaction ordering is always fair.",
          "Agreement on shared state/history under the protocol assumptions.",
          "A guarantee that endpoints cannot be compromised."
        ],
        "answer": 2,
        "explanation": "共識在協定假設下提供共同狀態或歷史的一致，不證明外部輸入真實、交易排序公平或端點不會被入侵。",
        "explanationEn": "Consensus supports agreement on shared state or history under its protocol assumptions. It does not prove external input truth, fair transaction ordering or uncompromised endpoints.",
        "source": "Exam Preparation Question Bank · Original Q19. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-20",
        "originalNumber": 20,
        "prompt": "A participant inserts a transaction before a pending trade to profit from its expected effect. What issue is illustrated?",
        "options": [
          "Password reuse",
          "Sandboxing",
          "Packet fragmentation",
          "Transaction-ordering/inclusion risk"
        ],
        "answer": 3,
        "explanation": "看到待處理交易後插入自己的交易來獲利，是交易排序／收錄風險。對最終帳本達成一致，並不等於排序公平。",
        "explanationEn": "Inserting a transaction ahead of a visible pending trade to profit from its effect illustrates transaction-ordering or inclusion risk. Agreement on the final ledger does not imply fairness.",
        "source": "Exam Preparation Question Bank · Original Q20. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-21",
        "originalNumber": 21,
        "prompt": "Static analysis reports a path that careful review shows cannot occur. What is this result?",
        "options": [
          "A false positive",
          "A true positive",
          "A replay attack",
          "A certificate failure"
        ],
        "answer": 0,
        "explanation": "分析器報出一條實際不可能發生的漏洞路徑，是 false positive。靜態分析的近似模型可能涵蓋不可行路徑。",
        "explanationEn": "Reporting a path that cannot actually occur is a false positive. Approximate static analysis can include infeasible paths.",
        "source": "Exam Preparation Question Bank · Original Q21. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-22",
        "originalNumber": 22,
        "prompt": "Why can dynamic testing miss a real vulnerability?",
        "options": [
          "It examines every possible program path mathematically.",
          "It observes only paths and inputs exercised during testing.",
          "It always over-approximates all possible behaviours.",
          "It cannot observe runtime behaviour."
        ],
        "answer": 1,
        "explanation": "動態測試只觀察測試中實際執行的路徑與輸入。沒有走到的漏洞仍可能存在，因此可能漏報。",
        "explanationEn": "Dynamic testing observes only the paths and inputs exercised during tests. Vulnerabilities on untested paths can remain undetected.",
        "source": "Exam Preparation Question Bank · Original Q22. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-23",
        "originalNumber": 23,
        "prompt": "What is the primary purpose of incident-response containment?",
        "options": [
          "Prove the final root cause immediately.",
          "Complete all legal notifications before investigation.",
          "Limit ongoing harm or spread while response continues.",
          "Delete evidence before systems are restored."
        ],
        "answer": 2,
        "explanation": "Containment 的目標是在應變持續進行時限制傷害與擴散，不是立即完成根因分析或刪掉證據。",
        "explanationEn": "Containment limits ongoing harm and spread while incident response continues. It is not the immediate completion of root-cause analysis or deletion of evidence.",
        "source": "Exam Preparation Question Bank · Original Q23. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-24",
        "originalNumber": 24,
        "prompt": "Which question best reflects proportionality in security monitoring?",
        "options": [
          "Can we collect every available data source indefinitely?",
          "Can we remove all human review from alert decisions?",
          "Can we avoid defining a purpose for collection?",
          "Is the data collected necessary for the security purpose and proportionate to the risk?"
        ],
        "answer": 3,
        "explanation": "比例原則關注收集的資料是否為安全目的所必要，以及對人的影響是否與風險相稱；不能沒有目的地無限收集。",
        "explanationEn": "Proportionality asks whether collection is necessary for the security purpose and whether its effects are justified by the risk. It does not justify unlimited collection without a defined purpose.",
        "source": "Exam Preparation Question Bank · Original Q24. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-25",
        "originalNumber": 25,
        "prompt": "Why are cyber-physical compromises especially serious?",
        "options": [
          "They can affect physical safety and operations as well as information.",
          "They can affect only screen appearance.",
          "They remove the need for availability controls.",
          "They make privacy the only relevant security property."
        ],
        "answer": 0,
        "explanation": "Cyber-physical 系統的完整性或可用性失效可能造成物理傷害、影響設備運作，不只涉及資料外洩。",
        "explanationEn": "Integrity or availability failures in cyber-physical systems can affect physical safety and operations as well as information security.",
        "source": "Exam Preparation Question Bank · Original Q25. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-26",
        "originalNumber": 26,
        "prompt": "Which control best helps reject a replayed authenticated command?",
        "options": [
          "A longer plaintext message",
          "A checked nonce, sequence number or timestamp freshness mechanism",
          "A public description of the encryption algorithm",
          "A larger database table"
        ],
        "answer": 1,
        "explanation": "Nonce、序號或時間戳必須被接收端有效檢查，才能判斷新鮮度。只有鑑別標籤或更長訊息並不能防重放。",
        "explanationEn": "A nonce, sequence number or timestamp must be effectively checked by the receiver to establish freshness. Authentication alone, or a longer message, does not stop replay.",
        "source": "Exam Preparation Question Bank · Original Q26. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-27",
        "originalNumber": 27,
        "prompt": "What is defence in depth?",
        "options": [
          "Using one very strong control and removing the others.",
          "Keeping the system design secret from all users.",
          "Using multiple complementary controls across different failure points.",
          "Giving all users administrator access for consistency."
        ],
        "answer": 2,
        "explanation": "縱深防禦是在不同失效點部署互補的多層控制。每層處理不同風險，降低單一失敗直接導致全面失陷的機會。",
        "explanationEn": "Defence in depth combines complementary controls across different failure points. Each layer addresses risks so that one failure is less likely to cause a complete compromise.",
        "source": "Exam Preparation Question Bank · Original Q27. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-28",
        "originalNumber": 28,
        "prompt": "A service stores passwords with reversible encryption so staff can recover them. What is generally preferable?",
        "options": [
          "Store every password in plaintext.",
          "Reuse one shared password for all users.",
          "Publish encrypted passwords with the key.",
          "Use a suitable salted password-hashing approach and reset rather than recover passwords."
        ],
        "answer": 3,
        "explanation": "使用合適的加鹽密碼雜湊進行驗證，忘記時走重設流程。可逆儲存會保留還原原密碼的金鑰與濫用風險。",
        "explanationEn": "Use an appropriate salted password-hashing function for verification and a reset process for forgotten passwords. Reversible storage retains decryption keys and unnecessary recovery or misuse risks.",
        "source": "Exam Preparation Question Bank · Original Q28. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "prep-29",
        "originalNumber": 29,
        "prompt": "A phishing site has HTTPS with a valid certificate for its own look-alike domain. What does this show?",
        "options": [
          "HTTPS protects the connection but does not prove the domain is the organisation the user intended.",
          "HTTPS guarantees the site is not malicious.",
          "Certificate validation removes the need to check the domain.",
          "TLS automatically prevents users from entering credentials into deceptive sites."
        ],
        "answer": 0,
        "explanation": "HTTPS 保護與憑證所列網域之間的連線，但釣魚者也能替自己的相似網域取得憑證。仍要確認是否為原本要造訪的網域。",
        "explanationEn": "HTTPS protects the connection to the domain in the certificate. A phishing operator can obtain a certificate for its own deceptive domain, so the intended domain must still be checked.",
        "source": "Exam Preparation Question Bank · Original Q29. Answer checked against the accompanying Answer Guide. W1–8 Q27 is a wording variant of this question and has been merged here."
      },
      {
        "id": "prep-30",
        "originalNumber": 30,
        "prompt": "A smart sensor submits false data to a blockchain, and consensus records it correctly. What lesson follows?",
        "options": [
          "Consensus proves sensor data is true.",
          "Consensus can agree on shared history without proving external inputs are trustworthy.",
          "Consensus prevents endpoint compromise.",
          "Replication automatically validates every physical measurement."
        ],
        "answer": 1,
        "explanation": "共識可以正確記錄大家同意的歷史，卻無法證明感測器輸入真實。被入侵的外部資料來源仍可能傳入假資料。",
        "explanationEn": "Consensus can correctly record agreed history without establishing that sensor input is true. A compromised external data source can still submit false information.",
        "source": "Exam Preparation Question Bank · Original Q30. Answer checked against the accompanying Answer Guide. "
      }
    ]
  },
  {
    "id": "teacher-revision",
    "kind": "teacher",
    "title": "Instructor: W1–8 Extras",
    "description": "Exam Revision · Repeated questions removed",
    "questions": [
      {
        "id": "revision-19",
        "originalNumber": 19,
        "prompt": "A portal is confidential and its records are unchanged, but students cannot submit work. Which property failed?",
        "options": [
          "Availability",
          "Authentication",
          "Non-repudiation",
          "Confidentiality"
        ],
        "answer": 0,
        "explanation": "服務保密、資料也沒改，但使用者不能交作業，失效的是 availability（可用性）。認證與不可否認性不是這次故障直接描述的性質。",
        "explanationEn": "Availability has failed: the service remains confidential and its data unchanged, but legitimate students cannot submit work. Authentication and non-repudiation are not the property directly described by the outage.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q19. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-20",
        "originalNumber": 20,
        "prompt": "Two analysts reach different conclusions because one assumes the attacker has credentials and the other does not. What best explains this?",
        "options": [
          "Security conclusions depend on explicit attacker assumptions.",
          "Encryption removes the need for assumptions.",
          "Both conclusions must therefore be wrong.",
          "Threat models should exclude attacker capabilities."
        ],
        "answer": 0,
        "explanation": "一方假設攻擊者有憑證、另一方沒有，能力前提不同就可能得到不同但各自合理的結論。應把威脅模型假設寫清楚。",
        "explanationEn": "Different attacker capabilities can yield different conclusions that are valid under their respective assumptions. Make the threat-model assumptions explicit before comparing the claims.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q20. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-21",
        "originalNumber": 21,
        "prompt": "An AI agent proposes deleting production data while investigating a finding. What is the best next step?",
        "options": [
          "Execute immediately because the agent suggested it.",
          "Require human approval and use a safe test environment.",
          "Disable all audit logging before execution.",
          "Give the agent broader administrator privileges."
        ],
        "answer": 1,
        "explanation": "刪除正式環境資料是高影響行動，應先經適當的人類核准，並在安全受控環境驗證。AI 的建議本身不是授權。",
        "explanationEn": "Deleting production data is a high-impact action requiring appropriate human approval and a controlled test environment. An AI recommendation is not itself authorisation.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q21. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-22",
        "originalNumber": 22,
        "prompt": "A deep link opens a banking transfer screen and pre-populates an account number. What should the app do before completing the transfer?",
        "options": [
          "Trust the URL because its syntax is valid.",
          "Validate the input and re-check user authorisation for the sensitive action.",
          "Disable the Android sandbox.",
          "Store the transfer data in the APK."
        ],
        "answer": 1,
        "explanation": "外部 deep link 是不可信輸入。格式驗證之外，仍要檢查敏感操作的使用者授權，不能因網址有效就直接完成轉帳。",
        "explanationEn": "External deep-link data is untrusted. Correct syntax does not remove the need to validate input and re-check user authorisation before a sensitive transfer.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q22. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-23",
        "originalNumber": 23,
        "prompt": "What is the main security problem with reusing the same one-time-pad key or keystream?",
        "options": [
          "It makes the ciphertext longer.",
          "It can reveal relationships between the plaintext messages.",
          "It prevents the receiver from decrypting.",
          "It automatically creates a digital signature."
        ],
        "answer": 1,
        "explanation": "同一 keystream 重用時，兩個密文 XOR 會使 keystream 抵消，露出明文之間的關係；已知或可猜明文還可能進一步洩漏內容。",
        "explanationEn": "Reusing a keystream lets it cancel when the ciphertexts are XORed, exposing relationships between plaintexts. Known or guessable plaintext can reveal additional content.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q23. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-24",
        "originalNumber": 24,
        "prompt": "Why is ECB mode unsuitable for structured sensitive data?",
        "options": [
          "Identical plaintext blocks can produce identical ciphertext blocks and blocks can be rearranged without integrity protection.",
          "ECB always uses public keys.",
          "ECB automatically prevents replay attacks.",
          "ECB hides all message patterns better than authenticated encryption."
        ],
        "answer": 0,
        "explanation": "同一金鑰下，ECB 的相同明文區塊產生相同密文區塊，會洩漏模式。若沒有完整性保護，區塊還可能被重排。",
        "explanationEn": "With the same key, ECB maps identical plaintext blocks to identical ciphertext blocks, exposing patterns. Without integrity protection, ciphertext blocks can also be rearranged.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q24. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-25",
        "originalNumber": 25,
        "prompt": "A user logs in successfully with stolen credentials and downloads data the account is allowed to read. Which control area most needs strengthening?",
        "options": [
          "Identity and access controls",
          "Block-cipher key length only",
          "Database availability only",
          "Packet routing only"
        ],
        "answer": 0,
        "explanation": "攻擊者利用的是失竊帳號及其權限；服務可以正常解密授權資料。應加強身分與存取控制，而不是只增加加密金鑰長度。",
        "explanationEn": "The attacker exploited a compromised identity and its permissions while encryption could still operate correctly. Identity and access controls need attention rather than only a longer cipher key.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q25. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-26",
        "originalNumber": 26,
        "prompt": "Which password-storage design is generally preferable?",
        "options": [
          "Reversible encryption so staff can recover passwords.",
          "Plaintext storage with strict file permissions.",
          "A suitable salted password-hashing function with password reset.",
          "One shared encrypted password for all users."
        ],
        "answer": 2,
        "explanation": "密碼宜用適當的加鹽密碼雜湊驗證，並提供安全重設。可逆還原、明文或共用密碼都不符合這個需求。",
        "explanationEn": "Verify passwords using an appropriate salted password-hashing function and offer secure reset. Reversible recovery, plaintext storage or a shared password do not meet that requirement.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q26. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-28",
        "originalNumber": 28,
        "prompt": "Why does encryption alone not stop a DDoS attack?",
        "options": [
          "DDoS primarily targets service capacity and availability.",
          "Encryption disables all network filtering.",
          "Encrypted services cannot be overloaded.",
          "DDoS only affects confidentiality."
        ],
        "answer": 0,
        "explanation": "DDoS 耗盡服務或網路容量，主要打擊可用性。加密能保護內容，但不能強迫網路傳遞封包或讓有限容量不會耗盡。",
        "explanationEn": "DDoS consumes network or service capacity and primarily affects availability. Encryption protects content but cannot force packet delivery or prevent finite resources from being exhausted.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q28. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-29",
        "originalNumber": 29,
        "prompt": "Which is the strongest primary defence against SQL injection?",
        "options": [
          "Hide database error messages only.",
          "Use parameterised queries so untrusted data is not interpreted as SQL structure.",
          "Increase the TLS key length.",
          "Store user input in a longer variable."
        ],
        "answer": 1,
        "explanation": "參數化查詢把資料值與可執行 SQL 結構分開，是根本防護。隱藏錯誤只減少資訊洩漏；增加 TLS 金鑰長度與變數長度不會修正 SQLi。",
        "explanationEn": "Parameterised queries separate untrusted values from executable SQL structure. Hiding errors limits disclosure, while longer TLS keys or variables do not repair SQL injection.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q29. Answer checked against the accompanying Answer Guide. "
      },
      {
        "id": "revision-30",
        "originalNumber": 30,
        "prompt": "Why can a security detector not simply be tuned to eliminate every false positive without consequence?",
        "options": [
          "Reducing false positives may increase missed attacks, creating false negatives.",
          "False positives and false negatives are identical.",
          "Detectors never require thresholds.",
          "All benign traffic should be blocked."
        ],
        "answer": 0,
        "explanation": "降低誤報的門檻調整可能讓部分真實攻擊也被忽略，增加漏報。偵測器需要平衡敏感度與調查成本，不是消除一類錯誤就沒有代價。",
        "explanationEn": "Reducing false positives through detector tuning may also suppress real attacks, creating false negatives. Sensitivity and investigation cost must be balanced; reducing one error type is not necessarily free of consequences.",
        "source": "Exam Revision Question Bank Weeks 1–8 · Original Q30. Answer checked against the accompanying Answer Guide. "
      }
    ]
  }
];
const CONTENT_INFO = {"version": "formal-v2-en-ui", "mockCount": 40, "teacherCount": 41, "weekCounts": {"1": 3, "2": 3, "3": 3, "4": 4, "5": 4, "6": 4, "7": 4, "8": 4, "9": 3, "10": 3, "11": 3, "12": 2}, "highCount": 38, "mediumCount": 2, "dedup": {"exact": 18, "near": 1, "retained": 41}, "lengthRanks": {"0": 10, "1": 10, "2": 10, "3": 10}, "answerPositions": {"A": 10, "B": 10, "C": 10, "D": 10}};
