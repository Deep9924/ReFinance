import React from "react";
import NewsComp from "../news_comp/News_comp";

const NewsArticles = (news) => {
	console.log(news)
	// values.image !== "" &&
	return (
		<>{
			news.slice(0, 10).map((values, key) => {
				return (
					values.summary !== "" && (
						<div key={key}>
							<NewsComp image={values.image} headline={values.headline} summary={values.summary} url={values.url} />
						</div>
					)
				);
			})
		}
		</>
		);
};

export default NewsArticles;
