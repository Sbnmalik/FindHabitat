package com.findhabitat.response;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class MultiResponse<T>{
    private List<T> data;    
    private int totalCount;

    public MultiResponse(List<T> data, int totalCount) {
        this.data = data;
        this.totalCount = data != null ? data.size() : 0;
    }
}
