(() => {
    "use strict";

    const BUTTON_ID = "atcoder-sample-copy-button";

    if (document.getElementById(BUTTON_ID)) {
        return;
    }

    function getSamples() {
        const samples = [];

        // 「入力例 1」「入力例 2」... を全部探す
        const headings = document.querySelectorAll("h3");

        for (const heading of headings) {
            const title = heading.textContent.trim();

            const match = title.match(/^入力例\s*(\d+)$/);

            if (!match) {
                continue;
            }

            const number = Number(match[1]);

            // このh3を含むsection
            const section = heading.closest("section");

            if (!section) {
                continue;
            }

            // 入力のpre
            const inputPre = section.querySelector("pre");

            if (!inputPre) {
                continue;
            }

            // 「出力例 n」を探す
            let outputPre = null;

            for (const outputHeading of headings) {
                const outputTitle = outputHeading.textContent.trim();

                const outputMatch =
                    outputTitle.match(/^出力例\s*(\d+)$/);

                if (!outputMatch) {
                    continue;
                }

                if (Number(outputMatch[1]) !== number) {
                    continue;
                }

                const outputSection =
                    outputHeading.closest("section");

                if (!outputSection) {
                    continue;
                }

                outputPre = outputSection.querySelector("pre");

                if (outputPre) {
                    break;
                }
            }

            if (!outputPre) {
                continue;
            }

            samples.push({
                number: number,
                input: inputPre.textContent.trim(),
                output: outputPre.textContent.trim()
            });
        }

        samples.sort((a, b) => a.number - b.number);

        return samples;
    }

    async function copySamples(button) {
        const samples = getSamples();

        console.log("取得したサンプル:", samples);

        if (samples.length === 0) {
            alert("サンプルがありませんでした。");
            return;
        }

        const text = samples
            .map(sample => {
                return `${sample.input}\n${sample.output}`;
            })
            .join("\n");

        try {
            await navigator.clipboard.writeText(text);

            button.textContent = "✓ コピーしました";

            setTimeout(() => {
                button.textContent = "📋 サンプルを全部コピー";
            }, 1500);

        } catch (error) {
            console.error(error);
            alert("コピーに失敗しました。");
        }
    }

    function createButton() {
        // 問題文を探す
        const statement =
            document.querySelector("#task-statement");

        if (!statement) {
            console.error("#task-statement が見つかりません");
            return;
        }

        const button = document.createElement("button");

        button.id = BUTTON_ID;
        button.type = "button";
        button.className = "btn btn-primary";

        button.textContent =
            "📋 サンプルを全部コピー";

        button.style.marginBottom = "15px";

        button.addEventListener("click", () => {
            copySamples(button);
        });

        statement.prepend(button);
    }

    createButton();
})();