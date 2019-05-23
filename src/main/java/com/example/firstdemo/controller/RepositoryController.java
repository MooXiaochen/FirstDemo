package com.example.firstdemo.controller;

import com.example.firstdemo.pojo.Repository;
import com.example.firstdemo.pojo.RepositoryComment;
import com.example.firstdemo.pojo.RepositoryDetails;
import com.example.firstdemo.service.RepositoryDetailsService;
import com.example.firstdemo.service.RepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/repository")
public class RepositoryController {

    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private RepositoryDetailsService repositoryDetailsService;

    @RequestMapping("/find")
    public List<Repository> find() {
        return repositoryService.doFindAll();
    }

    @ResponseBody
    @RequestMapping("/save")
    @Transactional
    public void save(@RequestParam Map<String, Object> params) {
        Map<String, Object> map = params;
        Repository repository = new Repository();
        repository.setKeyword(params.get("keyword").toString());
        repository.setTheme(params.get("theme").toString());
        repository.setSection(params.get("section").toString());
        int publishState = Integer.parseInt(String.valueOf(params.get("publishState")));
        repository.setPublishState(publishState);
        if (publishState == 1)
            repository.setPublishTime(new Date());
        repositoryService.doCreate(repository);
        RepositoryDetails repositoryDetails = new RepositoryDetails();
        repositoryDetails.setRepositoryId(repository.getId());
        repositoryDetails.setContent(params.get("content").toString());
        repositoryDetails.setUpdateTime(new Date());
        repositoryDetails.setOptCount(0);
        repositoryDetailsService.doCreate(repositoryDetails);
    }

    @RequestMapping("/getById")
    public Repository getById(@RequestParam("id") int id){
        return repositoryService.doRepositoryById(id);
    }
}
