(() => {
    "use strict";

    const BUTTON_ID = "atcoder-sample-copy-button";

    if (document.getElementById(BUTTON_ID)) {
        return;
    }

    function getSamples() {
        const samples = [];

        const parts = document.querySelectorAll("#task-statement .part");

        let currentInput = null;
        let currentNumber = null;

        for (const part of parts) {
            const h3 = part.querySelector("h3");
            const pre = part.querySelector("pre");

            if (!h3 || !pre) {
                continue;
            }

            const title = h3.textContent.trim();

            // 日本語
            let match = title.match(/^入力例\s*(\d+)$/);

            // 英語
            if (!match) {
                match = title.match(/^Sample Input\s*(\d+)$/i);
            }

            if (match) {
                currentNumber = Number(match[1]);
                currentInput = pre.textContent.trim();
                continue;
            }

            // 日本語
            match = title.match(/^出力例\s*(\d+)$/);

            // 英語
            if (!match) {
                match = title.match(/^Sample Output\s*(\d+)$/i);
            }

            if (match && currentInput !== null) {
                const outputNumber = Number(match[1]);

                if (outputNumber === currentNumber) {
                    samples.push({
                        number: currentNumber,
                        input: currentInput,
                        output: pre.textContent.trim()
                    });

                    currentInput = null;
                    currentNumber = null;
                }
            }
        }

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
            .map(sample => `${sample.input}\n${sample.output}`)
            .join("\n");

        try {
            await navigator.clipboard.writeText(text);

            button.textContent = "✓ コピーしました";

            setTimeout(() => {
                button.textContent = "📋 サンプルを全部コピー";
            }, 1500);

        } catch (error) {
            console.error("コピー失敗:", error);
            alert("コピーに失敗しました。");
        }
    }

    function createButton() {
        const statement = document.querySelector("#task-statement");

        if (!statement) {
            console.error("#task-statement が見つかりません");
            return;
        }

        const button = document.createElement("button");

        button.id = BUTTON_ID;
        button.type = "button";
        button.className = "btn btn-primary";
        button.textContent = "📋 サンプルを全部コピーa";
        button.style.marginBottom = "15px";

        button.addEventListener('click', async () => {
    const samples = [];

    // 入力例と出力例を直接取得
    const inputSamples = document.querySelectorAll(
        '#task-statement pre[id^="pre-sample"]'
    );

    if (inputSamples.length === 0) {
        alert('サンプルがありません');
        return;
    }

    // pre-sample0, pre-sample1, ... の順番で取得
    inputSamples.forEach((pre, index) => {
        samples.push(pre.textContent.trim());
    });

    const text = samples.join('\n\n');

    try {
        await navigator.clipboard.writeText(text);
        alert('サンプルを全部コピーしました！');
    } catch (e) {
        console.error(e);
        alert('コピーに失敗しました');
    }
});

        statement.prepend(button);
    }

    createButton();
})();