const budget_total = parseFloat($(".total_budget span").text());

$("body").on("keyup keydown keypress change", ".department input",
	function (e) {
		let running_total = budget_total;

		$(".department input").each(function () {
			let user_input = $(this).val();

			if (user_input !== "") {
				user_input = parseFloat(user_input)

				running_total = running_total - user_input;

			}



		});

		if (running_total >= 0 && running_total <= 20) {
			$(".total_budget").addClass("warning");
		} else if (running_total < 0) {
			$(".total_budget").addClass("error").removeClass("warning");
		} else {
			$(".total_budget").removeClass("error warning");
		}
		$(".total_budget span").text(running_total);

		let budgetCount = $("#budget_count");
		let budgetWordsError = $("#budget_words_error");
		let budgetWordsWarning = $("#budget_words_warning");

		if (budgetCount.text() >= 0 && budgetCount.text() <= 20) {
			budgetWordsWarning.text("You are getting close to budget. Make good choices.");
			budgetWordsError.text("");
		} else if (budgetCount.text() < 0) {
			budgetWordsWarning.text("");
			budgetWordsError.text("You are over budget! Make some changes. ");
		} else {
			budgetWordsWarning.text("");
			budgetWordsError.text("");
		};



	});