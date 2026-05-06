@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul

echo ============================================
echo   Claude Token Efficient + Karpathy Setup
echo ============================================
echo.

:: 대상 폴더 설정
if "%~1"=="" (
    set "TARGET=%CD%"
) else (
    set "TARGET=%~1"
)

echo 적용 대상: !TARGET!
echo.

:: CLAUDE.md 존재 확인
if exist "!TARGET!\CLAUDE.md" (
    echo [경고] CLAUDE.md 가 이미 존재합니다.
    set /p OVERWRITE="덮어쓸까요? y/n: "
    if /i "!OVERWRITE!" neq "y" (
        echo 취소되었습니다.
        goto :DONE
    )
    echo 기존 파일을 백업합니다: CLAUDE.md.bak
    copy "!TARGET!\CLAUDE.md" "!TARGET!\CLAUDE.md.bak" >nul
)

:: 프로필 선택
echo 프로필을 선택하세요:
echo   [1] base     - 범용 (기본 권장)
echo   [2] coding   - 코딩 전용 (더 강한 압축)
echo   [3] agents   - 에이전트/파이프라인 전용
echo.
set /p PROFILE_CHOICE="선택 1~3 (기본 1): "

if "!PROFILE_CHOICE!"=="2" (
    set "PROFILE=coding"
) else if "!PROFILE_CHOICE!"=="3" (
    set "PROFILE=agents"
) else (
    set "PROFILE=base"
)

echo.
echo [!PROFILE!] 프로필로 CLAUDE.md 생성 중...

if "!PROFILE!"=="agents" goto :WRITE_AGENTS
if "!PROFILE!"=="coding" goto :WRITE_CODING
goto :WRITE_BASE

:WRITE_BASE
set "F=!TARGET!\CLAUDE.md"
> "!F!" echo ## Output
>> "!F!" echo - Answer is always line 1. Reasoning comes after, never before.
>> "!F!" echo - No preamble. No greetings like Sure, Of course, Certainly, Absolutely.
>> "!F!" echo - No hollow closings like I hope this helps.
>> "!F!" echo - No restating the prompt. If the task is clear, execute immediately.
>> "!F!" echo - No explaining what you are about to do. Just do it.
>> "!F!" echo - No unsolicited suggestions. Do exactly what was asked, nothing more.
>> "!F!" echo - Structured output only: bullets, tables, code blocks. Prose only when explicitly requested.
>> "!F!" echo.
>> "!F!" echo ## Token Efficiency
>> "!F!" echo - Compress responses. Every sentence must earn its place.
>> "!F!" echo - No redundant context. Do not repeat information already established in the session.
>> "!F!" echo - No long intros or transitions between sections.
>> "!F!" echo - Short responses are correct unless depth is explicitly requested.
>> "!F!" echo.
>> "!F!" echo ## Sycophancy - Zero Tolerance
>> "!F!" echo - Never validate the user before answering.
>> "!F!" echo - Disagree when wrong. State the correction directly.
>> "!F!" echo - Do not change a correct answer because the user pushes back.
>> "!F!" echo.
>> "!F!" echo ## Accuracy and Speculation Control
>> "!F!" echo - Never speculate about code, files, or APIs you have not read.
>> "!F!" echo - If referencing a file or function: read it first, then answer.
>> "!F!" echo - If unsure: say I don't know. Never guess confidently.
>> "!F!" echo - Never invent file paths, function names, or API signatures.
>> "!F!" echo.
>> "!F!" echo ## Code Output
>> "!F!" echo - Return the simplest working solution. No over-engineering.
>> "!F!" echo - No abstractions or helpers for single-use operations.
>> "!F!" echo - No speculative features or future-proofing.
>> "!F!" echo - No docstrings or comments on code that was not changed.
>> "!F!" echo - Inline comments only where logic is non-obvious.
>> "!F!" echo - Read the file before modifying it. Never edit blind.
>> "!F!" echo.
>> "!F!" echo ## Warnings and Disclaimers
>> "!F!" echo - No safety disclaimers unless there is a genuine life-safety or legal risk.
>> "!F!" echo - No soft warnings like Note that or Keep in mind.
>> "!F!" echo - No As an AI framing.
>> "!F!" echo.
>> "!F!" echo ## Session Memory
>> "!F!" echo - Learn user corrections and preferences within the session.
>> "!F!" echo - Apply them silently. Do not re-announce learned behavior.
>> "!F!" echo - If the user corrects a mistake: fix it, remember it, move on.
>> "!F!" echo.
>> "!F!" echo ## Scope Control
>> "!F!" echo - Do not add features beyond what was asked.
>> "!F!" echo - Do not refactor surrounding code when fixing a bug.
>> "!F!" echo - Do not create new files unless strictly necessary.
>> "!F!" echo.
>> "!F!" echo ## Override Rule
>> "!F!" echo User instructions always override this file.
call :APPEND_KARPATHY
goto :WRITE_IGNORE

:WRITE_CODING
set "F=!TARGET!\CLAUDE.md"
> "!F!" echo ## Output
>> "!F!" echo - Answer is always line 1. No preamble, no closings, no restatements.
>> "!F!" echo - No explaining what you are about to do. Execute immediately.
>> "!F!" echo - No unsolicited suggestions, refactors, or improvements.
>> "!F!" echo - Code blocks only. No prose unless explicitly asked.
>> "!F!" echo.
>> "!F!" echo ## Token Efficiency
>> "!F!" echo - Compress. Every token must earn its place.
>> "!F!" echo - No redundant context. No session recaps.
>> "!F!" echo - Omit obvious comments. Omit docstrings on unchanged code.
>> "!F!" echo.
>> "!F!" echo ## Code Output
>> "!F!" echo - Simplest working solution only.
>> "!F!" echo - No over-engineering, no abstractions for single-use operations.
>> "!F!" echo - No speculative features or future-proofing.
>> "!F!" echo - Read the file before modifying it. Never edit blind.
>> "!F!" echo - When fixing a bug: touch only the bug. Do not refactor surrounding code.
>> "!F!" echo - Do not create new files unless strictly necessary.
>> "!F!" echo.
>> "!F!" echo ## Accuracy
>> "!F!" echo - Never speculate about code or APIs you have not read.
>> "!F!" echo - If unsure: say I don't know. Never guess confidently.
>> "!F!" echo - Never invent file paths, function names, or API signatures.
>> "!F!" echo.
>> "!F!" echo ## Sycophancy - Zero Tolerance
>> "!F!" echo - Never validate before answering.
>> "!F!" echo - Disagree when wrong. State the correction directly.
>> "!F!" echo - Do not change a correct answer under pushback.
>> "!F!" echo.
>> "!F!" echo ## Override Rule
>> "!F!" echo User instructions always override this file.
call :APPEND_KARPATHY
goto :WRITE_IGNORE

:WRITE_AGENTS
set "F=!TARGET!\CLAUDE.md"
> "!F!" echo ## Agent Output Rules
>> "!F!" echo - Return minimum viable output that satisfies the task spec.
>> "!F!" echo - No explanatory text unless a human will read it.
>> "!F!" echo - No preamble, no closings, no restatements.
>> "!F!" echo - Structured output only: JSON, CSV, code, or bullet lists.
>> "!F!" echo.
>> "!F!" echo ## Token Efficiency
>> "!F!" echo - Pipeline calls compound. Every token saved per call multiplies across runs.
>> "!F!" echo - No redundant context. No session recaps.
>> "!F!" echo - Accuracy over completeness.
>> "!F!" echo.
>> "!F!" echo ## Accuracy
>> "!F!" echo - If a file or resource was not read: do not reference its contents.
>> "!F!" echo - Downstream systems break on hallucinated values.
>> "!F!" echo - Never speculate about code, files, or APIs you have not read.
>> "!F!" echo - If unsure: return an error signal, not a guess.
>> "!F!" echo.
>> "!F!" echo ## Scope Control
>> "!F!" echo - Do exactly what the task spec says. Nothing more.
>> "!F!" echo - Do not create new files unless strictly necessary.
>> "!F!" echo - Do not refactor surrounding code when fixing a bug.
>> "!F!" echo.
>> "!F!" echo ## Override Rule
>> "!F!" echo User instructions always override this file.
call :APPEND_KARPATHY
goto :WRITE_IGNORE

:WRITE_IGNORE
echo.
echo ============================================
echo .claudeignore 설정
echo ============================================

if exist "!TARGET!\.claudeignore" (
    echo 기존 .claudeignore 가 있습니다. 건너뜁니다.
    goto :SETTINGS_JSON
)

set "G=!TARGET!\.claudeignore"
> "!G!" echo # 패키지 및 빌드 결과물
>> "!G!" echo node_modules/
>> "!G!" echo dist/
>> "!G!" echo build/
>> "!G!" echo .next/
>> "!G!" echo out/
>> "!G!" echo __pycache__/
>> "!G!" echo *.pyc
>> "!G!" echo .venv/
>> "!G!" echo venv/
>> "!G!" echo.
>> "!G!" echo # 버전 관리
>> "!G!" echo .git/
>> "!G!" echo.
>> "!G!" echo # 로그 및 임시파일
>> "!G!" echo *.log
>> "!G!" echo *.tmp
>> "!G!" echo *.cache
>> "!G!" echo.
>> "!G!" echo # 테스트 커버리지
>> "!G!" echo coverage/
>> "!G!" echo .coverage
>> "!G!" echo.
>> "!G!" echo # IDE
>> "!G!" echo .vscode/
>> "!G!" echo .idea/
>> "!G!" echo.
>> "!G!" echo # 환경변수
>> "!G!" echo .env
>> "!G!" echo .env.local
>> "!G!" echo .env.*.local
echo .claudeignore 생성 완료

:SETTINGS_JSON
echo.
echo ============================================
echo Claude Code settings.json 설정
echo ============================================

set "CLAUDE_DIR=%USERPROFILE%\.claude"

if exist "!CLAUDE_DIR!\settings.json" (
    echo 기존 settings.json 이 있습니다. 건너뜁니다.
    echo [전역 설정은 최초 1회만 적용됩니다]
    goto :DONE
)

if not exist "!CLAUDE_DIR!" mkdir "!CLAUDE_DIR!"

set "S=!CLAUDE_DIR!\settings.json"
> "!S!" echo {
>> "!S!" echo   "model": "sonnet",
>> "!S!" echo   "env": {
>> "!S!" echo     "MAX_THINKING_TOKENS": "10000",
>> "!S!" echo     "CLAUDE_CODE_SUBAGENT_MODEL": "haiku"
>> "!S!" echo   }
>> "!S!" echo }
echo settings.json 적용 완료

:DONE
echo.
echo ============================================
echo 완료!
echo ============================================
echo.
echo 적용된 파일:
if exist "!TARGET!\CLAUDE.md"      echo   - !TARGET!\CLAUDE.md  [!PROFILE! + Karpathy]
if exist "!TARGET!\.claudeignore"  echo   - !TARGET!\.claudeignore
if exist "!CLAUDE_DIR!\settings.json" echo   - !CLAUDE_DIR!\settings.json
echo.
echo 사용법:
echo   cd !TARGET!
echo   claude
echo.
echo 세션 중 유용한 명령어:
echo   /usage       현재 토큰 사용량 확인
echo   /compact     컨텍스트 수동 압축
echo   /model opus  복잡한 작업 시 모델 전환
echo   /effort low  thinking 토큰 절약
echo.
pause
goto :EOF

:APPEND_KARPATHY
>> "!F!" echo.
>> "!F!" echo ---
>> "!F!" echo.
>> "!F!" echo ## Karpathy Guidelines
>> "!F!" echo.
>> "!F!" echo ### 1. Think Before Coding
>> "!F!" echo - State your assumptions explicitly. If uncertain, ask.
>> "!F!" echo - If multiple interpretations exist, present them. Do not pick silently.
>> "!F!" echo - If a simpler approach exists, say so. Push back when warranted.
>> "!F!" echo - If something is unclear, stop. Name what is confusing. Ask.
>> "!F!" echo.
>> "!F!" echo ### 2. Simplicity First
>> "!F!" echo - No features beyond what was asked.
>> "!F!" echo - No abstractions for single-use code.
>> "!F!" echo - No flexibility or configurability that was not requested.
>> "!F!" echo - No error handling for impossible scenarios.
>> "!F!" echo - If you write 200 lines and it could be 50, rewrite it.
>> "!F!" echo.
>> "!F!" echo ### 3. Surgical Changes
>> "!F!" echo - Do not improve adjacent code, comments, or formatting.
>> "!F!" echo - Do not refactor things that are not broken.
>> "!F!" echo - Match existing style, even if you would do it differently.
>> "!F!" echo - If you notice unrelated dead code, mention it. Do not delete it.
>> "!F!" echo - Remove imports/variables/functions that YOUR changes made unused.
>> "!F!" echo - Do not remove pre-existing dead code unless asked.
>> "!F!" echo.
>> "!F!" echo ### 4. Goal-Driven Execution
>> "!F!" echo - Define success criteria. Loop until verified.
>> "!F!" echo - Add validation: write tests for invalid inputs, then make them pass.
>> "!F!" echo - Fix the bug: write a test that reproduces it, then make it pass.
>> "!F!" echo - Refactor X: ensure tests pass before and after.
>> "!F!" echo - For multi-step tasks, state a brief plan before starting.
echo Karpathy 가이드라인 추가 완료
exit /b