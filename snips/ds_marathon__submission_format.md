## Submission Format
You will submit a [Dockerized](https://docs.docker.com/get-started/) code following [this generic template](https://github.com/topcoder-platform-templates/marathon-code-only). A sample submission customized for this very match is provided in the match forum, and you are welcome to ask there for further help with the dockerization and submission format.

It should be possible to build and run your submission executing these Docker commands in the code folder of your solution:

```
docker build -t submission .
docker run --rm -v /path/to/data:/data:ro -v /path/to/workdir:/workdir submission ./test.sh /data/input.csv /workdir/output.csv
```

The entry point script of your solution, test.sh, will get two arguments: the path to input and output CSV files. The output file must have three columns: X, Y, DEM. The first two columns must match exactly the same columns of the input file; to the DEM column you should output the reconstructed terrain elevation at each point.