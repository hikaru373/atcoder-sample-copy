(() => {
    "use strict";

    const BUTTON_ID = "atcoder-sample-copy";

    // すでにボタンがあれば何もしない
    if (document.getElementById(BUTTON_ID)) {
        return;
    }

    const statement = document.querySelector("#task-statement");

    if (!statement) {
        return;
    }

    const button = document.createElement("button");

    button.id = BUTTON_ID;
    button.textContent = "📋 サンプルを全部コピー";
    button.type = "button";

    button.className = "btn btn-primary";
    button.style.marginBottom = "15px";

    button.addEventListener("click", async () => {
        const samples = [];

        const headings = statement.querySelectorAll("h3");

        for (const heading of headings) {
            const title = heading.textContent.trim();

            // 「入力例1」「入力例 1」など
            if (!/^入力例\s*\d+$/.test(title)) {
                continue;
            }

            const number = title.match(/\d+/)[0];

            // 入力例の直後にあるpreを取得
            let input = heading.nextElementSibling;

            while (input && input.tagName !== "PRE") {
                input = input.nextElementSibling;
            }

            if (!input) {
                continue;
            }

            // 次の「出力例」を探す
            let outputHeading = input.nextElementSibling;

            while (
                outputHeading &&
                !(
                    outputHeading.tagName === "H3" &&
                    /^出力例\s*\d+$/.test(
                        outputHeading.textContent.trim()
                    )
                )
            ) {
                outputHeading = outputHeading.nextElementSibling;
            }

            if (!outputHeading) {
                continue;
            }

            // 出力例のpreを取得
            let output = outputHeading.nextElementSibling;

            while (output && output.tagName !== "PRE") {
                output = output.nextElementSibling;
            }

            if (!output) {
                continue;
            }

            samples.push({
                number,
                input: input.textContent,
                output: output.textContent
            });
        }

        if (samples.length === 0) {
            alert("サンプルが見つかりませんでした。");
            return;
        }

        // 全サンプルを1つのテキストにする
        const text = samples
            .map(sample =>
                `${sample.input.trim()}\n${sample.output.trim()}`
            )
            .join("\n");

        try {
            await navigator.clipboard.writeText(text);

            const originalText = button.textContent;

            button.textContent = "✓ コピーしました";

            setTimeout(() => {
                button.textContent = originalText;
            }, 1500);

        } catch (error) {
            console.error(error);
            alert("コピーに失敗しました。");
        }
    });

    // 問題文の先頭にボタンを1個だけ追加
    statement.prepend(button);
})();