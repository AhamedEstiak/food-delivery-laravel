
import React from "react";

const RatingStars = ({ rating }) => {
    const starClassName = "w-6 h-6 text-yellow-500";

    const getStarIcon = (index) => {
        if (index + 1 <= rating) {
            return "fas fa-star";
        } else if (index < rating) {
            return "fas fa-star-half-alt";
        } else {
            return "far fa-star";
        }
    };

    return (
        <div className="flex items-center">
            {[...Array(5).keys()].map((index) => (
                <i
                    key={index}
                    className={`${starClassName} ${getStarIcon(index)}`}
                />
            ))}
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating}
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
            </p>
        </div>
    );
};

export default RatingStars;
