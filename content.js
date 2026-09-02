(() => {
    "use strict";

    const BUTTON_ID = "atcoder-sample-copy-button";

    // すでにボタンがあれば終了
    if (document.getElementById(BUTTON_ID)) {
        return;
    }

    function getSamples() {
        const samples = [];

        // 「入力例 1」「入力例 2」... をすべて取得
        const headings = document.querySelectorAll("h3");

        for (const heading of headings) {
            const title = heading.textContent.trim();

            const inputMatch = title.match(/^入力例\s*(\d+)$/);

            if (!inputMatch) {
                continue;
            }

            const number = inputMatch[1];

            // 入力例の h3 の直後にある pre
            const input = heading.parentElement.querySelector("pre");

            if (!input) {
                continue;
            }

            // 同じ番号の「出力例」を探す
            let outputHeading = null;

            for (const h3 of headings) {
                const outputTitle = h3.textContent.trim();

                if (outputTitle === `出力例 ${number}`) {
                    outputHeading = h3;
                    break;
                }
            }

            if (!outputHeading) {
                continue;
            }

            // 出力例の直後の pre
            const output = outputHeading.parentElement.querySelector("pre");

            if (!output) {
                continue;
            }

            samples.push({
                number: Number(number),
                input: input.textContent.trim(),
                output: output.textContent.trim()
            });
        }

        // サンプル番号順に並べる
        samples.sort((a, b) => a.number - b.number);

        return samples;
    }

    async function copySamples(button) {
        const samples = getSamples();

        if (samples.length === 0) {
            alert("サンプルが見つかりませんでした。");
            return;
        }

        // 入力例 + 出力例を全部まとめる
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
        // 問題文を取得
        const statement = document.querySelector("#task-statement");

        if (!statement) {
            return;
        }

        const button = document.createElement("button");

        button.id = BUTTON_ID;
        button.type = "button";
        button.textContent = "📋 サンプルを全部コピー";

        button.className = "btn btn-primary";

        button.style.marginBottom = "15px";

        button.addEventListener("click", () => {
            copySamples(button);
        });

        // 問題文の一番上に1個だけ追加
        statement.prepend(button);
    }

    createButton();
})();