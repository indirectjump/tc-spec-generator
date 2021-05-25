## Scoring Details
The outputs of your submissions will be scored in three steps. A failure on the first or second step means the zero overall score.


1. **Fail or Pass**.
    1. A sanity check that your output contains exactly the same points as the input; _i.e._ the X, and Y columns in your output must match exactly the X, and Y columns from input.
    2. A sanity check that in each row (for each X, and Y) you have output a valid **DEM** number - the estimated terrain level elevation in meters.
    3. A sanity check that DEM values and its derivatives are continuous over the entire Earth surface. For that end we estimate first and second derivatives of DEM from your output and check that their absolute values at any point are smaller than 12000 m/deg for the first-order derivatives, and 12000 m/deg2 for the second-order derivatives. We also check that derivatives of each kind are bound by a smaller 4000 m/deg absolute value threshold at least at 99% of points (4000 m/deg2, in case of second-order derivatives).
2. **Fail or Pass**. We check that your solution satisfies the hard conditions on **Elev_value**, **Elev_error**, **Elev_min**, **Elev_max**, **Slope_azimuth** (explained in the Dataset Details section above), at all points where these values were provided in the input.
3. **Numeric Score.** Assuming your solution has passed the checks (1) and (2), we calculate its score based on RMS deviation of your output **DEM** from the ground-truth **DEM** within the geographic area used for scoring. \
 \

_(DESCRIBE HOW THE SCORING FORMULA WORKS HERE)_


The dockerized version of scorer is provided in the challenge forum. It can be built and executed with the following commands (assuming you keep you solution output, and the ground truth in the same workdir folder on your host machine):

```
docker build -t scorer .
docker run --rm -v /path/to/workdir:/workdir scorer ./run-scorer.sh /workdir/solution.csv /workdir/ground-truth.csv /workdir
```


As the `ground-truth.csv` you should provide the training input CSV file. The score at step #3 will be calculated over the points containing non-empty DEM values in that training input. The result score will be written out into the result.txt file in the `workdir`.



*   This match is rated (TCO-eligible), and individual (no teaming allowed).
*   The provisional and final scoring is performed at **[AWS EC2 machine](https://aws.amazon.com/ec2/instance-types/)**. The solution runtime limit is 1 hour. Solutions not completed within the runtime limit will be failed with zero score.
*   Only positive scores (anything passing the hard "fail or pass" checks) on final dataset are eligible for prizes.
*   Any 3rd party components of your solution must be available under permissive open source licenses, similar to [MIT License](https://en.wikipedia.org/wiki/MIT_License). In case of doubts, please ask in the challenge forum, or contact the match copilot directly, to approve the use of libraries licensed under more restrictive terms.
*   To claim a prize, in addition to getting a prize-eligible score in the final testing, within a week after the announcement of the final results you must submit a detailed write-up explaining your solution, its implementation, and any other details relevant to its usage and further development.